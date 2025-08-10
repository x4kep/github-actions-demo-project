const rimraf = require('rimraf');
const mkdirp = require('mkdirp');

rimraf.sync('./dist');
mkdirp.sync('./dist/logs');