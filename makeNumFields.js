$(document).ready(function(){
	console.log("started!");
	alert("Site under maintenance. It might be broken.");
	var prevLetter = '0';
	var column = 0;
	for(var i = 0; i < items.length;i++) {
		var item = items[i];
		if(i % 20 === 0) column++;
		if(item.name.charAt(0) !== prevLetter) {
			prevLetter = item.name.charAt(0);
			$("#inputs" + column).append("<div id=\"marker" + i + "\">");
			$("#marker" + i).append("<p class=\"col-sm-6\"><strong>" + item.name.charAt(0).toUpperCase() + "</strong></p>");
			$("#marker" + i).append("<div class=\"col-sm-6\"></div>");
		}
		$("#inputs" + column).append("<div class=\"row\" id=\"input" + i + "\">");
		$("#input" + i).append("<p class=\"col-sm-6\">" + item.name + "</p>");
		$("#input" + i).append("<input class=\"col-sm-6\" type=\"number\" min=\"0\" value=\"0\" id=\"inputItem" + item.id + "\">")
		//$("#inputs" + column).children().eq(0).append(item.name + "<br />");
		//$("#inputs" + column).children().eq(1).append("<input type=\"number\" min=\"0\" value=\"2\" id=\"inputItem" + item.id + "\"><br />");
	}
});