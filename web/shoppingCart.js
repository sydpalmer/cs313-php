var count = 0;
var cost = 0;
function addToCart(key, value) {
	if(typeof(Storage) !== "undefined") {
		sessionStorage.setItem(key, value);
		alert("Item added to cart");
		count += 1;

	    if (key == "buy1"){
			cost += 5;
	     }
 	    if (key == "buy2"){
		    cost += 5;
	    }
	    if (key == "buy3"){
		    cost += 5;
		}
	    if (key == "buy4"){
		    cost += 5;
	    }
        if (key == "buy5"){
		    cost += 5;
	    }
	    if (key == "buy6"){
		    cost += 5;
	    }
	    if (key == "buy7"){
		    cost += 5;
	    }
	    if (key == "buy8"){
		    cost += 5;
	    }
        if (key == "buy9"){
		    cost += 5;
	    }
	    if (key == "buy10"){
		    cost += 5;
	    }
        if (key == "buy11"){
		    cost += 10;
	    }
 	    if (key == "buy12"){
		     cost += 10;
	    }
	    if (key == "buy13"){
		    cost += 10;
	    }
	    if (key == "buy14"){
		    cost += 10;
	    }
        if (key == "buy15"){
		    cost += 10;
	    }
	    if (key == "buy16"){
		    cost += 3;
	     }
	    if (key == "buy17"){
		    cost += 3;
	    }
	    if (key == "buy18"){
		    cost += 3;
	    }
        if (key == "buy19"){
		    cost += 3;
	    }
	    if (key == "buy20"){
		    cost += 3;
	    }

        if(count >= 5 && 10 > count){
            cost -= (cost * .05);
        }
        else if(count >= 10 && 15 > count){
            cost -= (cost * .1);
        }
        else if(count >=15){
            cost -= (cost * .15);
        }
	    document.getElementById('total').style.fontWeight = "bold";
        document.getElementById('total').style.fontSize = "30px";
        document.getElementById('total').innerHTML = '$' + cost.toFixed(2);

        if(count >= 5){
            document.getElementById("discount").style.color = "green";
            document.getElementById("discount").style.fontWeight = "bold";
            document.getElementById("discount").innerHTML = "Discount Applied!";
        }
        else{
            document.getElementById("discount").innerHTML = "No Discount Applied!";
            document.getElementById("discount").style.color = "black";
            document.getElementById("discount").style.fontWeight = "normal";
        }

	}else{
		alert("Sorry, your browser does not support web storage...");
	}
}

function loadCart(){
	var added =[];
	if(sessionStorage.getItem('buy1') != null){
		added.push(sessionStorage.getItem('buy1'));
	}
	if(sessionStorage.getItem('buy2') != null){
		added.push(sessionStorage.getItem('buy2'));
	}
	if(sessionStorage.getItem('buy3') != null){
		added.push(sessionStorage.getItem('buy3'));
	}
	if(sessionStorage.getItem('buy4') != null){
		added.push(sessionStorage.getItem('buy4'));
	}
	if(sessionStorage.getItem('buy5') != null){
		added.push(sessionStorage.getItem('buy5'));
	}
	if(sessionStorage.getItem('buy6') != null){
		added.push(sessionStorage.getItem('buy6'));
	}
	if(sessionStorage.getItem('buy7') != null){
		added.push(sessionStorage.getItem('buy7'));
	}
	if(sessionStorage.getItem('buy8') != null){
		added.push(sessionStorage.getItem('buy8'));
	}
	if(sessionStorage.getItem('buy9') != null){
		added.push(sessionStorage.getItem('buy9'));
	}
	if(sessionStorage.getItem('buy10') != null){
		added.push(sessionStorage.getItem('buy10'));
	}
	if(sessionStorage.getItem('buy11') != null){
		added.push(sessionStorage.getItem('buy11'));
	}
	if(sessionStorage.getItem('buy12') != null){
		added.push(sessionStorage.getItem('buy12'));
	}
	if(sessionStorage.getItem('buy13') != null){
		added.push(sessionStorage.getItem('buy13'));
	}
	if(sessionStorage.getItem('buy14') != null){
		added.push(sessionStorage.getItem('buy14'));
	}
	if(sessionStorage.getItem('buy15') != null){
		added.push(sessionStorage.getItem('buy15'));
	}
	if(sessionStorage.getItem('buy16') != null){
		added.push(sessionStorage.getItem('buy16'));
	}
	if(sessionStorage.getItem('buy17') != null){
		added.push(sessionStorage.getItem('buy17'));
	}
	if(sessionStorage.getItem('buy18') != null){
		added.push(sessionStorage.getItem('buy18'));
	}
	if(sessionStorage.getItem('buy19') != null){
		added.push(sessionStorage.getItem('buy19'));
	}
	if(sessionStorage.getItem('buy20')){
		added.push(sessionStorage.getItem('buy20'));
	}

	var text, i, len;
	len = added.length;
	text = "<ol align='center;'>"
	for(i = 0; i < len; i++){
		text += "<li>" + added[i] + "</li><br>";
	}
	text += "</ol>"

	document.getElementById("itemsInCart").innerHTML = text;
}