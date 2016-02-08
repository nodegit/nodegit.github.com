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
    switch (type) {
      // Primitives
      case 'String':
        return 'string';
      case 'Number':
        return 'number';
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
          // Remove '.' from types (e.g. Reference.Type => ReferenceType) as
          // we make them part of the outer scope.
          // Also, convert the owner of the type properly (e.g. Object.TYPE => GitObjectTYPE).
          return getType(type.slice(0, dotIndex)) + type.slice(dotIndex + 1);
        } else {
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
   * Converts a function in JSON format into a TypeScript function
   * declaration.
   */
  function getFunctionDeclaration(name, fcn, isStatic) {
    var jsDoc = "";
    if (fcn.description !== "") {
      jsDoc += fcn.description + "\n";
    }
    var fcnSig = isStatic ? 'public static' : 'public';
    fcnSig += " " + name + "(" +
      fcn.params.map(function(param) {
        jsDoc += "\n@param " + param.name + " ";
        // Apparently param.description can be null, so check that it's not before looking at the contents!
        if (param.description && param.description.trim() !== "") {
          // Indent secondary lines of the description.
          jsDoc += param.description.replace(/\n/g, '\n    ') + "\n";
        }
        // Make each param type a union type if multiple types.
        return param.name + ": " + (param.types.map(function(type) { return getType(type); }).join(" | "));
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
    return "export const enum " + exportName + " {\n" + enumFields + "\n}";
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

    if (className !== exportName) {
      nameMap[exportName] = className;
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
    var fields = Object.keys(classData.fields).sort().map(function(name) {
      // Fields do not have descriptions.
      return "public " + name + ": " + getType(classData.fields[name]);
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