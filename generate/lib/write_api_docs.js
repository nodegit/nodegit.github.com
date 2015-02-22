var fs = require('fs-extra');
var Path = require('path');
var changeCase = require('change-case');

var writeApiDocs = function(apiData, path) {
  var path = path || '';
  path = ("/" + path + "/").replace(/\/+/g, '/');

  fs.removeSync(Path.join(process.cwd(), path, 'api'));

  var homeBody = "";
  var homeSections = "";

  var linkToEntry = function(name, file, hash) {
    if (hash) {
      hash = "#" + hash;
    } else {
      hash = ''
    }

    return "[" + name + "](" + path + "api/" + changeCase.snakeCase(file) + "/" + hash + ")";
  }

  var crossLink = function(text) {
    if (apiData[text]) {
      return "[" + text + "](" + path + "api/" + changeCase.snakeCase(text) + "/)";
    } else {
      return text;
    }
  }

  Object.keys(apiData).sort().forEach(function(item) {
    var data = apiData[item];
    var pageBody = "";
    var pageSections = "";

    if (Object.keys(data.constructors).length || Object.keys(data.prototypes).length ||
      Object.keys(data.fields).length || Object.keys(data.enums).length) {
      homeBody += "## <a name='" + item + "'></a>" + linkToEntry(item, item) + "\n\n";
      homeSections += '  "' + item + '": "#' + item + '"\n';

      if (data.hasConstructor) {
        pageBody += "```js\n";
        pageBody += "var " + changeCase.camelCase(item) + " = new " + item + "();\n";
        pageBody += "```\n\n";
      }
    }

    if (Object.keys(data.constructors).length) {
      homeBody += "| Class Methods |  |\n";
      homeBody += "| --- | ---: |\n";
      Object.keys(data.constructors).sort().forEach(function(obj) {
        var fdata = data.constructors[obj];
        var method = "<span>" + item + ".</span>" + obj + " <span>(" + data.constructors[obj].params.map(function(param) {return param.name;}).join(', ') + ")</span>"

        pageBody += "## <a name=\"" + obj + "\"></a>" + "<span>" + item + ".</span>" + obj;

        var tags = " <span class=\"tags\">";
        if (fdata.isAsync) {
          tags += "<span class=\"async\">Async</span>";
        } else {
          tags += "<span class=\"sync\">Sync</span>";
        }
        if (fdata.experimental) {
          tags += "<span class=\"experimental\">Experimental</span>";
        }
        tags += "</span>"

        homeBody += "| " + linkToEntry(method, item, obj) + " | " + tags + " |\n";

        pageBody += tags + "\n\n";
        pageBody += "```js\n";

        var returnName = null;
        if (fdata.return && fdata.return.type &&
            fdata.return.name != 'undefined' && fdata.return.name != 'void') {
          returnName = fdata.return.name;
        }

        if (fdata.isAsync) {
          returnName = returnName || 'data';
          pageBody += item + "." + obj + "(" + fdata.params.map(function(param) {return param.name})
            .join(", ") + ").then(function(" + returnName + ") {\n";
          pageBody += "  // Use " + returnName + "\n";
          pageBody += "});\n";
        } else {
          if (returnName) {
            pageBody += "var " + returnName + " = ";
          }
          pageBody += item + "." + obj + "(" + fdata.params.map(function(param) {return param.name})
            .join(", ") + ");\n";
        }
        pageBody += "```\n\n";

        if (fdata.description) {
          pageBody += fdata.description + "\n\n";
        }

        if (fdata.params.length) {
          pageBody += "| Parameters | Type |   |\n";
          pageBody += "| --- | --- | --- |\n";
          fdata.params.forEach(function(param) {
            var types = param.types.map(function(type) {
              return crossLink(type);
            });

            pageBody += "| " + param.name + " | " + types.join(', ') + " | " +
              (param.description || '').replace(/\n/g, '').replace(/\s+/g, ' ') + " |\n";
          });
        }

        if (returnName) {
          pageBody += "\n| Returns |  |\n";
          pageBody += "| --- | --- |\n";
          pageBody += "| " + crossLink(fdata.return.type) + " | " + fdata.return.description + " |\n\n";
        }

        pageSections += '  "' + obj + '": "#' + obj + '"\n';
      });
      homeBody += "\n";
    }

    if (Object.keys(data.prototypes).length) {
      homeBody += "| Instance Methods |  |\n";
      homeBody += "| --- | ---: |\n";
      Object.keys(data.prototypes).sort().forEach(function(obj) {
        var fdata = data.prototypes[obj];
        var method = "<span>" + item + "#</span>" + obj + " <span>(" + data.prototypes[obj].params.map(function(param) {return param.name;}).join(', ') + ")</span>"

        pageBody += "## <a name=\"" + obj + "\"></a>" + "<span>" + item + "#</span>" + obj;

        var tags = " <span class=\"tags\">";
        if (fdata.isAsync) {
          tags += "<span class=\"async\">Async</span>";
        } else {
          tags += "<span class=\"sync\">Sync</span>";
        }
        if (fdata.experimental) {
          tags += "<span class=\"experimental\">Experimental</span>";
        }
        tags += "</span>"

        pageBody += tags + "\n\n";
        pageBody += "```js\n";

        homeBody += "| " + linkToEntry(method, item, obj) + " | " + tags + " |\n";

        var returnName = null;
        if (fdata.return && fdata.return.type &&
            fdata.return.name != 'undefined' && fdata.return.name != 'void') {
          returnName = fdata.return.name;
        }

        if (fdata.isAsync) {
          returnName = returnName || 'data';
          pageBody += changeCase.camelCase(item) + "." + obj + "(" + fdata.params.map(function(param) {return param.name})
            .join(", ") + ").then(function(" + returnName + ") {\n";
          pageBody += "  // Use " + returnName + "\n";
          pageBody += "});\n";
        } else {
          if (returnName) {
            pageBody += "var " + returnName + " = ";
          }
          pageBody += changeCase.camelCase(item) + "." + obj + "(" + fdata.params.map(function(param) {return param.name})
            .join(", ") + ");\n";
        }
        pageBody += "```\n\n";

        if (fdata.description) {
          pageBody += fdata.description + "\n\n";
        }

        if (fdata.params.length) {
          pageBody += "| Parameters | Type |\n";
          pageBody += "| --- | --- | --- |\n";
          fdata.params.forEach(function(param) {
            var types = param.types.map(function(type) {
              return crossLink(type);
            });
            pageBody += "| " + param.name + " | " + types.join(', ') + " | " +
              (param.description || '').replace(/\n/g, '').replace(/\s+/g, ' ') + " |\n";
          });
        }

        if (returnName) {
          pageBody += "\n| Returns |  |\n";
          pageBody += "| --- | --- |\n";
          pageBody += "| " + crossLink(fdata.return.type) + " | " + fdata.return.description + " |\n\n";
        }

        pageSections += '  "#' + obj + '": "#' + obj + '"\n';
      });
      homeBody += "\n";
    }

    if (Object.keys(data.enums).length) {
      homeBody += "| ENUMS |  |\n";
      homeBody += "| --- | ---: |\n";
      Object.keys(data.enums).sort().forEach(function(obj) {
        homeBody += "| " + linkToEntry("<span>" + item + ".</span>" + obj, item, obj) + "|  |\n";

        pageBody += "## <a name=\"" + obj + "\"></a>" + "<span>" + item + ".</span>" + obj;
        pageBody += " <span class=\"tags\">";
        pageBody += "<span class=\"enum\">ENUM</span>";
        pageBody += "</span>\n\n";
        pageBody += "| Flag | Value |\n";
        pageBody += "| --- | --- | --- |\n";

        Object.keys(data.enums[obj]).forEach(function(key) {
          pageBody += "| <span>" + item + "." + obj + ".</span>" + key + " | " + data.enums[obj][key] + " |\n"
        });
        pageBody += "\n";
        pageSections += '  "' + obj + '": "#' + obj + '"\n';
      });
      homeBody += "\n";
    }

    if (Object.keys(data.fields).length) {
      pageBody += "## <a name=\"ivars\"></a>Instance Variables\n\n";
      pageBody += "| Variable | Type |\n";
      pageBody += "| --- | --- |\n";

      homeBody += "| Instance Variables |  |\n";
      homeBody += "| --- | ---: |\n";

      Object.keys(data.fields).sort().forEach(function(obj) {
        homeBody += "| " + linkToEntry("<span>" + item + "#</span>" + obj, item, obj) + " |  |\n";
        pageBody += "| <a name=\"" + obj + "\"></a>" + obj + " | " + data.fields[obj] + " |\n";
      });

      pageBody += "\n";
      homeBody += "\n";
      pageSections += '  "Instance Variables": "#ivars"\n';
    }

    homeBody += "\n"

    if (pageBody) {
      var pageContent = "---\n";
      pageContent += "layout: default\n";
      pageContent += "menu_item: api\n";
      pageContent += "title: " + item + "\n";
      pageContent += "description: Version 0.3.0\n";
      pageContent += "menu_item: api\n";
      pageContent += "return_to:\n";
      pageContent += "  \"API Documentation Index\": " + path + "api/\n";
      pageContent += "sections:\n";
      pageContent += pageSections;
      pageContent += "---\n\n";
      pageContent += pageBody;

      console.log("- Writing " + item);
      fs.outputFileSync('api/' + changeCase.snakeCase(item) + '/index.md', pageContent);
    }
  });

  var homeContent = "---\n";
  homeContent += "layout: default\n";
  homeContent += "menu_item: api\n";
  homeContent += "title: API Docs\n";
  homeContent += "description: Version 0.3.0\n";
  homeContent += "menu_item: api\n";
  homeContent += "sections:\n";
  homeContent += homeSections;
  homeContent += "---\n\n";
  homeContent += homeBody;

  console.log("- Writing API Index")
  fs.outputFileSync('.' + path + 'api/index.md', homeContent);


}

module.exports = writeApiDocs;
