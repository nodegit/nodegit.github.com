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
