var fs = require('fs-extra');
var setDocDefaults = require('./set_doc_defaults');
var changeCase = require('change-case');

var removePointerReferences = function(text) {
  if (!text) return '';
  text = text.replace(/a pointer to /ig, '');
  text = text.replace(/pointer where to store /ig, '');
  text = text.match(/pointer/i) ? '' : text; // Better to ignore pointer text
  return text;
}

var sanitizeArgName = function(className, comment) {
  var argName = changeCase.camelCase(className);
  if (argName == 'number') {
    argName = 'result';
  }

  return argName;
}

var generatedData = function(path, missingTestsPath) {
  var apiData = {};
  var generatedJSON = fs.readJsonSync(path);

  if (missingTestsPath) {
    var missingTests = fs.readJsonSync(missingTestsPath);
  }

  generatedJSON.forEach(function(item) {
    switch (item.type) {
      case 'class':
      case 'struct':
        var obj = setDocDefaults(apiData, item.jsClassName);
        obj.type = item.type
        obj.hasConstructor = item.hasConstructor || false

        item.functions.forEach(function(func) {
          data = {
            params: [],
            fires: [],
            return: {
              type: func.return.jsClassName,
              name: sanitizeArgName(func.return.jsClassName, func.return.comment),
              description: removePointerReferences(func.return.comment)
            },
            isAsync: func.isAsync,
            description: "",
            experimental: false,
          }

          if (missingTests) {
            if (!missingTests[item.filename] || missingTests[item.filename].testFileMissing === false) {
              data.experimental = true;
            } else {
              if (missingTests[item.filename].functions.indexOf(item.jsClassName) != -1) {
                data.experimental = true;
              }
            }
          }

          func.args.forEach(function(arg) {
            if (arg.isReturn) {
              data.return = {
                name: sanitizeArgName(arg.jsClassName, arg.comment),
                type: arg.jsClassName,
                description: removePointerReferences(arg.comment)
              };
            } else if (!arg.ignore && !arg.isSelf) {
              data.params.push({
                "name": arg.name,
                "types": [arg.jsClassName],
                "description": arg.comment,
                "optional": arg.isOptional || false
              });
            }
          });

          if (func.isPrototypeMethod) {
            obj.prototypes[func.jsFunctionName] = data
          } else {
            obj.constructors[func.jsFunctionName] = data
          }
        });

        item.fields.forEach(function(field) {
          obj.fields[field.name] = field.jsClassName;
        });
        break;
      case 'enum':
        obj = setDocDefaults(apiData, item.owner);

        var list = obj.enums[item.JsName] = {}
        item.values.forEach(function(value) {
          list[value.JsName] = value.value;
        });
        break;
    }
  });

  return apiData;
}

module.exports = generatedData;
