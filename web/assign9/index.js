var express = require('express');
var app = express();
var url = require('url');

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/getRate', function(request, response) {
	handleMath(request, response);
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

function handleMath(request, response) {
	var requestUrl = url.parse(request.url, true);

	console.log("Query parameters: " + JSON.stringify(requestUrl.query));

	// TODO: Here we should check to make sure we have all the correct parameters

	var postage = requestUrl.query.postage;
	var operand1 = Number(requestUrl.query.operand1);

	computeOperation(response, postage, operand1);
}

function computeOperation(response, post, left) {

	var result = 0;

	if (post == "Letters (Stamped)") {
		if(left <= "1"){
			result = 0.50;
		}else if(left <= "2" && left > 1){
			result = 0.71;
		}else if (left <= "3" && left > 2) {
			result = 0.92;
		}else if(left <= "3.5" && left > 3){
			result = 1.13;
		}else if(left > 3.5){
			post = "Large Envelopes (Flats)";
		}
	} else if (post == "Letters (Metered)") {
		if(left <= "1"){
			result = 0.47;
		}else if(left <= "2" && left > 1){
			result = 0.68;
		}else if (left <= "3" && left > 2) {
			result = 0.89;
		}else if(left <= "3.5" && left > 3){
			result = 1.10;
		}else if(left > 3.5){
			post = "Large Envelopes (Flats)";
		}		
	} else if (post == "Large Envelopes (Flats)") {
		if(left <= "1"){
			result = 1.00;
		}else if(left <= "2" && left > "1"){
			result = 1.21;
		}else if (left <= "3" && left > "2") {
			result = 1.42;
		}else if(left <= "4" && left > "3"){
			result = 1.63;
		}else if(left <= "5" && left > "4"){
			result = 1.84;
		}else if (left <= "6" && left > "5") {
			result = 2.05;
		}else if(left <= "7" && left > "6"){
			result = 2.26;
		}else if(left <= "8" && left > "7"){
			result = 2.47;
		}else if (left <= "9" && left > "8") {
			result = 2.68;
		}else if(left <= "10" && left > "9"){
			result = 2.89;
		}else if(left <= "11" && left > "10"){
			result = 3.10;
		}else if (left <= "12" && left > "11") {
			result = 3.31;
		}else if(left <= "13" && left > "12"){
			result = 3.52;
		}

	} else if (post == "First-Class Package Service—Retail") {
		if(left <= "4"){
			result = 3.50;
		}else if(left <= "8" && left > "4"){
			result = 3.75;
		}else if (left <= "9" && left > "8") {
			result = 4.10;
		}else if(left <= "10" && left > "9"){
			result = 4.45;
		}else if(left <= "11" && left > "10"){
			result = 4.80;
		}else if (left <= "12" && left > "11") {
			result = 5.15;
		}else if(left <= "13" && left > "12"){
			result = 5.50;
		}
	} else {
		response.write("ERROR!");
	}

	// Set up a JSON object of the values we want to pass along to the EJS result page
	var params = {postage: post, left: left, result: result};

	// Render the response, using the EJS page "result.ejs" in the pages directory
	// Makes sure to pass it the parameters we need.
	response.render('pages/result', params);

}