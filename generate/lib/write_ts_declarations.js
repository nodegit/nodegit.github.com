/**
 * Consumes the API in JSON format, and produces a TypeScript declaration file.
 * @author John Vilk <jvilk@cs.umass.edu>
 */
var fs = require('fs-extra');
var Path = require('path');

var writeTsDecls = function(apiData, path) {
  var path = path || '';
  path = ("/" + path + "/").replace(/\/+/g, '/');

  /**
   * Given a type from the API docs, produce a TypeScript type.
   */
  function getType(type) {
    // Remove spaces.
    type = type.replace(/\s/g, '');
    // Convert [] to Array<> for generics.
    var sqBracketIndex = type.indexOf('[');
    if (sqBracketIndex !== -1) {
      return "Array<" + getType(type.slice(0, sqBracketIndex)) + ">";
    }

    // If type has < in it already, translate generic argument.
    var angleIndex = type.indexOf('<');
    if (angleIndex !== -1) {
      type = type.slice(0, angleIndex) + '<' + getType(type.slice(angleIndex + 1, type.indexOf('>'))) + ">";
    }

    switch (type) {
      // Weird things. Prune items as we fix docs.
      case 'obj':
      case 'ConvenientHunk':
      case 'lineStats':
      case 'RevWalk':
      case 'StatusFile':
      case 'historyEntry':
      case 'DiffList':
        return 'any';
      // Untyped function callbacks.
      case 'CheckoutNotifyCb':
      case 'CheckoutPerfdataCb':
      case 'CheckoutProgressCb':
      case 'DiffFileCb':
      case 'DiffBinaryCb':
      case 'DiffHunkCb':
      case 'DiffLineCb':
      case 'DiffNotifyCb':
      case 'CredAcquireCb':
      case 'FetchheadForeachCb':
      case 'FilterStreamFn':
      case 'IndexMatchedPathCb':
      case 'NoteForeachCb':
      case 'StashCb':
      case 'StashApplyProgressCb':
      case 'StatusCb':
      case 'SubmoduleCb':
      case 'TransferProgressCb':
      case 'TransportCb':
      case 'TransportCertificateCheckCb':
        return 'Function';
      // Primitives
      case 'String':
        return 'string';
      case 'Char':
      case 'int':
      case 'Number':
        return 'number';
      case 'Void':
        return 'void';
      case 'bool':
        return 'boolean';
      case 'Array':
        return 'Array<any>';
      // Avoiding type collusions
      case 'Object':
        return 'GitObject';
      case 'Blob':
        return 'GitBlob';
      // NodeJS types
      case 'EventEmitter':
        return 'NodeJS.EventEmitter';
      default:
        var dotIndex = type.indexOf('.');
        if (dotIndex !== -1) {
          if (type[dotIndex + 1] === '<') {
            // Sometimes, the docs include a '.' between the type and the generic type argument.
            return type.replace(/\./g, '');
          } else {
            // Remove '.' from types (e.g. Reference.Type => ReferenceType) as
            // we make them part of the outer scope.
            // Also, convert the owner of the type properly (e.g. Object.TYPE => GitObjectTYPE).
            return getType(type.slice(0, dotIndex)) + type.slice(dotIndex + 1);
          }
        } else {
          // Check for weird things. If there are weird things, punt with 'any'.
          if (type.indexOf('(') !== -1 || type.indexOf(':') !== -1) {
            return 'any';
          }

          return type;
        }
    }
  }

  /**
   * Converts a block of text into a block of JSDoc. Removes empty lines.
   */
  function textToJSDoc(text) {
    var lines = text.split('\n');
    // Strip empty lines, and begin non-empty lines with " * "
    lines = lines.filter(function(line) {
      return line.trim() !== "";
    }).map(function(line) {
      return " * " + line;
    });

    return "/**\n" + lines.join("\n") + "\n */";
  }

  /**
   * Strip illegal characters from identifiers.
   */
  function fixIdentifier(name) {
    return name.replace(/[\[\]]/g, '');
  }

  /**
   * Converts a function in JSON format into a TypeScript function
   * declaration.
   */
  function getFunctionDeclaration(name, fcn, isStatic) {
    var jsDoc = "";
    if (fcn.experimental) {
      jsDoc += "[EXPERIMENTAL] ";
    }
    if (fcn.description !== "") {
      jsDoc += fcn.description + "\n";
    }
    var fcnSig = isStatic ? 'public static' : 'public';
    fcnSig += " " + name + "(" +
      fcn.params.map(function(param) {
        var paramName = fixIdentifier(param.name);
        jsDoc += "\n@param " + paramName + " ";
        // Apparently param.description can be null, so check that it's not before looking at the contents!
        if (param.description && param.description.trim() !== "") {
          // Indent secondary lines of the description.
          jsDoc += param.description.replace(/\n/g, '\n    ') + "\n";
        }
        // Make each param type a union type if multiple types.
        return paramName + ": " + (param.types.map(function(type) { return getType(type); }).join(" | "));
      }).join(', ') + "): ";

    var returnType = fcn.return ? getType(fcn.return.type) : "void";
    if (fcn.isAsync) {
      returnType = "PromiseLike<" + returnType + ">";
    }
    var fcnDesc = fcn.return ? fcn.return.description.replace(/\n/g, '\n    ') : '';

    if (fcnDesc.trim() !== "") {
      jsDoc += "\n@return " + fcnDesc;
    }

    fcnSig += returnType + ";"

    return textToJSDoc(jsDoc) + "\n" + fcnSig;
  }

  /**
   * Convert an enum into a TypeScript const enum declaration.
   */
  function getEnumDeclaration(className, enumName, enumData) {
    var exportName = className + enumName;
    var enumFields = "  " + Object.keys(enumData).sort().map(function(enumType) {
      return enumType + " = " + enumData[enumType];
    }).join(",\n  ");
    return "declare enum " + exportName + " {\n" + enumFields + "\n}";
  }

  /**
   * Indents + concatenates an array of lines.
   */
  function indentLines(text, indentation) {
    return text.join("\n").replace(/^/gm, indentation);
  }

  // Array of TypeScript declarations.
  var decls = [];
  // Map from export name => class name
  var nameMap = {};

  Object.keys(apiData).sort().forEach(function(exportName) {
    var className = getType(exportName);
    var classData = apiData[exportName];
    var classDecl = "";

    // Export specially only if we have to remap the name to avoid type collisions.
    if (className !== exportName) {
      nameMap[exportName] = className;
      classDecl = "declare ";
    } else {
      classDecl = "export ";
    }
    // There's no description for actual classes. Jump right into a definition.
    classDecl += "class " + className + " {\n"

    var staticMethods = Object.keys(classData.constructors).sort().map(function(name) {
      return getFunctionDeclaration(name, classData.constructors[name], true);
    });

    var instanceMethods = Object.keys(classData.prototypes).sort().map(function(name) {
      return getFunctionDeclaration(name, classData.prototypes[name], false);
    });

    // Fields
    // HACK: Filter out fields that clash with declared methods. This is a bug in the doc script.
    var fields = Object.keys(classData.fields).sort().filter(function(name) {
      return !classData.prototypes[name];
    }).map(function(name) {
      // Fields do not have descriptions.
      return "public " + fixIdentifier(name) + ": " + getType(classData.fields[name]);
    });

    // Enums (static fields)
    var enumFields = Object.keys(classData.enums).sort().map(function(name) {
      // Add to decl list. They are self-exporting.
      decls.push(getEnumDeclaration(className, name, classData.enums[name]));

      // Export on class, too.
      return "public static " + name + ": typeof " + className + name + ";";
    });

    var indent = "  ";
    classDecl += indentLines(enumFields, indent) + "\n" + indentLines(staticMethods, indent) + "\n" + indentLines(fields, indent) + "\n" + indentLines(instanceMethods, indent) + "\n" +
        "}";
    decls.push(classDecl);
  });

  var tsDeclFile = "// Type definitions for nodegit\n// Project: http://www.nodegit.org/\n// Definitions by: John Vilk <https://jvilk.com/>\n\n";

  tsDeclFile += decls.join("\n\n");

  tsDeclFile += "\n\nexport { " + Object.keys(nameMap).sort().map(function(exportName) {
    return nameMap[exportName] + " as " + exportName;
  }).join(", ") + " }\n";

  fs.removeSync(Path.join(process.cwd(), path, 'ts'));
  fs.outputFileSync('.' + path + 'ts/nodegit.d.ts', tsDeclFile);
};

module.exports = writeTsDecls;