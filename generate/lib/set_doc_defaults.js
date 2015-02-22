var setDocDefaults = function(apiData, className) {
  if (!apiData[className]) {
    apiData[className] = {
      constructors:{},
      prototypes:{},
      fields:{},
      enums:{}
    };
  }

  return apiData[className];
}

module.exports = setDocDefaults;
