var fs = require('fs');
var path = require('path');

fs.readdir(process.argv[2],callback);

function callback(err, list) {
	var filetype = '.' + process.argv[3];
	
    list.forEach(function(file){
    	if(path.extname(file) === filetype){
    		console.log(file);
    	}
    })
 }