var dox = require('dox');
var Promise = require('bluebird');
var fs = require('fs-extra');
var dive = Promise.promisify(require('dive'));
var changeCase = require('change-case');
var Path = require('path');
var setDocDefaults = require('./set_doc_defaults');

var addConvenienceMethods = function(apiData) {
  return dive('generate/nodegit/lib', {recursive:false}, function(err, path) {
    var code = fs.readFileSync(path).toString();
    var className = changeCase.pascalCase(Path.basename(path, '.js'));
    dox.parseComments(code, {raw: true}).forEach(function(doc) {

      if (!doc.ctx) return;

      var data = {
        params: [],
        fires: [],
        return: null,
        isAsync: false,
        description: doc.description.full
      }

      doc.tags.forEach(function(tag) {
        switch(tag.type) {
          case 'param':
            data.params.push({
              "name": tag.name,
              "types": tag.types,
              "description": tag.description,
              "optional": tag.optional
            });
            break;
          case 'return':
            data.return = {
              name: changeCase.camelCase(tag.types[0]),
              type: tag.types[0],
              description: tag.description
            };
            break;
          case 'async':
            data.isAsync = true;
            break;
          case 'fires':
            matches = tag.string.match(/.+#(.+) (.+)/)
            data.fires.push({
              name: matches[1],
              sends: matches[2]
            });
            break;
          case 'start':
            data.start = tag.string;
            break;
          case 'log':
            console.log(JSON.stringify(doc, 0, 4));
            break;
        }
      });

      if (doc.ctx.constructor == className) {
        var obj = setDocDefaults(apiData, className);
        apiData[className].prototypes[doc.ctx.name] = data;
      } else if (doc.ctx.receiver == className) {
        var obj = setDocDefaults(apiData, className);
        apiData[className].constructors[doc.ctx.name] = data;
      }
    });
  }).then(function() {
    return apiData;
  });
}

module.exports = addConvenienceMethods;
