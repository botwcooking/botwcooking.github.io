$(document).ready(function(){
	console.log("started!");
	var prevLetter = '0';
	var column = 0;
	for(var i = 0; i < items.length;i++) {
		var item = items[i];
		if(i % 20 === 0) column++;
		if(item.name.charAt(0) !== prevLetter) {
			prevLetter = item.name.charAt(0);
			$("#inputs" + column).children().eq(0).append("<strong>" + prevLetter.toUpperCase() + "</strong><br />");
			$("#inputs" + column).children().eq(1).append("<div><br /></div>");
		}
		$("#inputs" + column).children().eq(0).append(item.name + "<br />");
		$("#inputs" + column).children().eq(1).append("<input type=\"number\" min=\"0\" value=\"2\" id=\"inputItem" + item.id + "\"><br />");
	}
});