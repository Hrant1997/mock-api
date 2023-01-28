const logicalDir = __dirname + '/functions';
const dataDir = __dirname + '/data';

require('mock-json-response/src/index')(logicalDir, dataDir, {
    port: 4000
});