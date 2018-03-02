var http = require('http');

//create a server object:
http.createServer(function (req, res) {
	if(req == '/home'){
		res.write('<h1>Welcome to the Home Page</h1>');
	}else if(req == '/getData'){
		res.write(json.strigify({name: 'Sydney Palmer',class:'cs313'}));
	}else{
		res.status(404);
		res.send("Page Not Found")
	}
  res.write('Hello World!'); //write a response to the client
  res.end(); //end the response
}).listen(8080); //the server object listens on port 8080