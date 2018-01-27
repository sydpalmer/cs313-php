var count = 0;
var cost = 0;
var added = [];
function addToCart(key, value) {
	if(typeof(Storage) !== "undefined") {
		sessionStorage.setItem(key, value);
		alert("Item added to cart");
		count += 1;
		added.push(value);

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
	document.getElementById("itemsInCart").innerHTML = added;
}