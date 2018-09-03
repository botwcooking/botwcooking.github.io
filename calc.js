var multiplier = [1.5, 1.75, 2.05, 2.4, 2.8];
var list = [];
var reduces = 0;
var totalPrice = 0;
var efficiency = 0;
function calc() {
	list = [];
	reduces = 0;
	totalPrice = 0;
	efficiency = 0;
	$("#out").empty();
	$("#total").empty();
	if(getTotal() < 1) return;
	for(var i = 0; i < items.length; i++) {
		list[i] = $("#inputItem" + i).val();
	}
	while(getTotal() > 5) {
		var temp = getNextSet();
		var li = "<li>"
		for(var i = 0; i < temp.length; i++) {
			li += temp[i].name;
			if(i < temp.length - 1) li += " & "
		}
		var total = 0;
		for(var i = 0; i < temp.length; i++) {
			total += temp[i].price * 2.8;
		}
		var origional = Math.floor(total) + 1;
		efficiency += total % 10;
		total += 10 - total % 10;
		totalPrice += total;
		li += " = <strong>" + total + "</strong> rupees. (Efficiency price: " + origional + " rupees)</li>"
		$("#out").append(li);
	}
	console.log(getTotal());
	var temp1 = [];
	for(var i = 0; i < getTotal(); i++) {
		temp1[i] = getMostExpensive();
		list[temp1[i].id]--;
	}
	var li = "<li>"
	for(var i = 0; i < temp1.length; i++) {
		li += temp1[i].name;
		if(i < temp1.length - 1) li += " & "
	}
	var total = 0;
	for(var i = 0; i < temp1.length; i++) {
		total += temp1[i].price * multiplier[getTotal()];
	}
	var origional1 = Math.floor(total) + 1;
	total += 10 - total % 10;
	totalPrice += total;
	var efficiecyMark = efficiency / (reduces + temp1.length);
	efficiencyMark = 11 - efficiecyMark;
	li += " = <strong>" + total + "</strong> rupees. (Efficiency price: " + origional1 + " rupees)</li>"
	$("#out").append(li);
	$("#total").append("That totals <strong>" + totalPrice + "</strong> rupees! (Efficiency mark: " + efficiecyMark + ")");
}

function getMostExpensive() {
	var out = -1
	var most = 0;
	for(var i = 0; i < items.length; i++) {
		if(list[i] > 0 && items[i].price > most) {
			most = items[i].price;
			out = i;
		}
	}
	return items[out];
}

function getTotal() {
	var arr = $("input");
    var tot = 0;
    for(var i = 0; i <arr.length; i++){
        if(parseInt(arr[i].value))
            tot += parseInt(arr[i].value);
    }
    return tot - reduces;
}

function getNextSet() {
	reduces += 5;
	var set = [];
	set[0] = getMostExpensive();
	list[set[0].id]--;
	set[1] = getMostExpensive();
	list[set[1].id]--;
	set[2] = getMostExpensive();
	list[set[2].id]--;
	set[3] = getMostExpensive();
	list[set[3].id]--;
	set[4] = items[getClosestToButNotUnder(0, list, set[0].price + set[1].price + set[2].price + set[3].price)];
	list[set[4].id]--;
	return set;
}

function getClosestToButNotUnder(target, templist, total) {
	var closestAmount = 100000;
	var closestIndex = -1;
	for(var o = 0; o < templist.length; o++) {
		if(templist[o] > 0 && (items[o].price * 2.8 + total * 2.8) % 10 > target && (items[o].price * 2.8 + total * 2.8) % 10 - target < closestAmount) {
			closestIndex = o;
			closestAmount = (items[o].price * 2.8 + total * 2.8) % 10 - target;
		}
	}
	return closestIndex;
}