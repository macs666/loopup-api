/* 
    index.js Models index
    Note:- Only module export code for graphQL schema passed to makeExecutableSchemaFromModules 
           should be in this file
    Created by Muhammed azhar 
*/

const { makeExecutableSchemaFromModules } = require('../utils/module');

module.exports = makeExecutableSchemaFromModules({
  modules: [],
});
