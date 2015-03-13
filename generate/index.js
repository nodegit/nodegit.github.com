var fs = require('fs');
var path = require('path');
var fse = require('fs-extra');
var glob = require('glob').sync;
var generatedData = require('./lib/generated_data');
var writeApiDocs = require('./lib/write_api_docs');
var addConvenienceMethods = require('./lib/add_convenience_methods.js');

var idefsPath = 'generate/nodegit/generate/output/idefs.json';
var missingtestsPath = 'generate/nodegit/generate/output/missing-tests.json'

var baseData = generatedData(idefsPath, missingtestsPath);
var fullData;

addConvenienceMethods(baseData).then(function(fullData) {
  writeApiDocs(fullData);
});

// Copy convenience methods in.
fse.removeSync('guides');
fse.copySync('generate/nodegit/guides/', 'guides');

glob('guides/**/README.md').forEach(function(file) {
  var dir = path.dirname(file);
  var filename = path.basename(file);

  // Rename README.md => index.md
  fs.renameSync(file, dir + "/" + 'index.md');
});
