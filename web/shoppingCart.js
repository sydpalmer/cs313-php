var count = 0;
var cost = 0;
var added =[];
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
	text = "<ol>"
	for(i = 0; i < len; i++){
		text += "<li>" + added[i] + "</li><br>";
	}
	text += "</ol>"

	document.getElementById("itemsInCart").innerHTML = text;
}

var input = "<b>Check which items you want to remove: </b><br>";
function makeCheckBoxes() {
	
	for (var i = 0; i < added.length;i++) {
		input += "<input type='checkbox' name='remove' value='" + 
		added[i] + "'> Item " + (i + 1) + " ";
	}
	document.getElementById("removeItems").innerHTML = input;
}

function remmoveCartItems() {
	var remove = document.forms[0];
	for (var i = 0; i < added.length; i++) {
		if(remove[i].checked && remove[i].value == "$5 Black and Cream Bracelet"){
			sessionStorage.removeItem("buy1");
		}
		else if(remove[i].checked && remove[i].value == "$5 Small Blue Bracelet"){
			sessionStorage.removeItem("buy2");
		}
		else if(remove[i].checked && remove[i].value == "$5 Two-layer Black Bracelet"){
			sessionStorage.removeItem("buy3");
		}
		else if(remove[i].checked && remove[i].value == "$5 Teal Bracelet"){
			sessionStorage.removeItem("buy4");
		}
		else if(remove[i].checked && remove[i].value == "$5 Teal and Blue Bracelet"){
			sessionStorage.removeItem("buy5");
		}
		else if(remove[i].checked && remove[i].value == "$5 Small Black Bracelet"){
			sessionStorage.removeItem("buy6");
		}
		else if(remove[i].checked && remove[i].value == "$5 Black Bead Band Watch"){
			sessionStorage.removeItem("buy7");
		}
		else if(remove[i].checked && remove[i].value == "$5 Blue and Green Bracelet"){
			sessionStorage.removeItem("buy8");
		}
		else if(remove[i].checked && remove[i].value == "$5 CTR Bracelet"){
			sessionStorage.removeItem("buy9");
		}
		else if(remove[i].checked && remove[i].value == "$5 Multi-layer Black Bracelet"){
			sessionStorage.removeItem("buy10");
		}
		else if(remove[i].checked && remove[i].value == "$10 Earth Necklace"){
			sessionStorage.removeItem("buy11");
		}
		else if(remove[i].checked && remove[i].value == "$10 Green Pendant on chain Necklace"){
			sessionStorage.removeItem("buy12");
		}
		else if(remove[i].checked && remove[i].value == "$10 Green and Cream Necklace"){
			sessionStorage.removeItem("buy13");
		}
		else if(remove[i].checked && remove[i].value == "$10 Cream and Green Necklace"){
			sessionStorage.removeItem("buy14");
		}
		else if(remove[i].checked && remove[i].value == "$10 Blue Necklace"){
			sessionStorage.removeItem("buy15");
		}
		else if(remove[i].checked && remove[i].value == "$3 Light Blue Earrings"){
			sessionStorage.removeItem("buy16");
		}
		else if(remove[i].checked && remove[i].value == "$3 Dark Blue Earrings"){
			sessionStorage.removeItem("buy17");
		}
		else if(remove[i].checked && remove[i].value == "$3 Ice Earrings"){
			sessionStorage.removeItem("buy18");
		}
		else if(remove[i].checked && remove[i].value == "$3 Green Hoop Earrings"){
			sessionStorage.removeItem("buy19");
		}
		else if(remove[i].checked && remove[i].value == "$3 Blue Hoop Earrings"){
			sessionStorage.removeItem("buy20");
		}
	}
	loadCart();
}

function confirm() {
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
	text = "Purchased items:<br>" + added[0];
	for(i = 1; i < len; i++){
		text += "<br>" + added[i];
	}

	document.getElementById("purchasedItems").innerHTML = text;

	var address = [];
	address.push(sessionStorage.getItem('street'));
	if(sessionStorage.getItem('apt') != null){
		address.push(sessionStorage.getItem('apt'));
	}
	address.push(sessionStorage.getItem('city'));
	address.push(sessionStorage.getItem('state'));
	address.push(sessionStorage.getItem('zip'));

	document.getElementById("shipped").innerHTML = 
		address[0] + "<br>" + address[1] + "<br>" + address[2]
		+ ", " + address[3] + " " + address[4];
}