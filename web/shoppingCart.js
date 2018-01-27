var count = 0;
function addToCart(value) {
	if(typeof(Storage) !== "undefined") {
		sessionStorage.setItem("cart", value);
		alert("Item added to cart");
		count += 1;

		var cost = 0;
	    if (value = "buy1"){
			cost += 5;
	     }
 	    if (value = "buy2"){
		    cost += 5;
	    }
	    if (val = "buy3"){
		    cost += 5;
		}
	    if (value = "buy4"){
		    cost += 5;
	    }
        if (value = "buy5"){
		    cost += 5;
	    }
	    if (value = "buy6"){
		    cost += 5;
	    }
	    if (value = "buy7"){
		    cost += 5;
	    }
	    if (value = "buy8"){
		    cost += 5;
	    }
        if (value = "buy9"){
		    cost += 5;
	    }
	    if (value = "buy10"){
		    cost += 5;
	    }
        if (value = "buy11"){
		    cost += 10;
	    }
 	    if (value = "buy12"){
		     cost += 10;
	    }
	    if (value = "buy13"){
		    cost += 10;
	    }
	    if (value = "buy14"){
		    cost += 10;
	    }
        if (value = "buy15"){
		    cost += 10;
	    }
	    if (value = "buy16"){
		    cost += 3;
	     }
	    if (value = "buy17"){
		    cost += 3;
	    }
	    if (value = "buy18"){
		    cost += 3;
	    }
        if (value = "buy19"){
		    cost += 3;
	    }
	    if (value = "buy20"){
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