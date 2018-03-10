var fs = require('fs');
var buffer;

fs.readFile(process.argv[2],callback);

function callback(err, buffer) {
    var string = buffer.toString();
    var array = string.split('\n');
    console.log(array.length - 1);
 }