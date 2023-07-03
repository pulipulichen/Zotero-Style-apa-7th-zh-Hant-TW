const fs = require('fs');
const path = require('path');

function readFilesRecursive(directoryPath) {
  const fileContents = [];

  function readFilesInDirectory(directory) {
    const files = fs.readdirSync(directory);

    files.forEach((file) => {
      const filePath = path.join(directory, file);
      const stat = fs.statSync(filePath);

      if (stat.isDirectory()) {
        readFilesInDirectory(filePath);
      } else {
        const content = fs.readFileSync(filePath, 'utf-8');
        fileContents.push(content);
      }
    });
  }

  readFilesInDirectory(directoryPath);

  return fileContents;
}

module.exports = readFilesRecursive