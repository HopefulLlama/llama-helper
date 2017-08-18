const fs = require('fs');

module.exports = (filePath, callbackWithChanges) => {
  let contents = fs.readFileSync(filePath, {encoding: 'utf-8'}).toString();
  let update = callbackWithChanges(contents);
  fs.writeFileSync(filePath, update);
};