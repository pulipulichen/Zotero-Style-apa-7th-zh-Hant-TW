const chokidar = require('chokidar');
const directoryPath = '/src';
const watcher = chokidar.watch(directoryPath, { recursive: true });

const CompileTemplate = require('./CompileTemplate.js')

let timer
watcher.on('all', (filePath) => {
  clearTimeout(timer)
  timer = setTimeout(function () {
    CompileTemplate(filePath)
  }, 500)
});

CompileTemplate()