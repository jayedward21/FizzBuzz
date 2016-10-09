$(document).ready(function() {
	for (counter=1; counter <=100; counter++) {
		if ((counter % 3) == 0)
		{
			if ((counter % 5) == 0){
				document.write("fizz" + " buzz" + "<br>")
				continue;
			}
			document.write("fizz" + "<br>")
			continue;
		}
		if ((counter % 5) == 0){
			document.write("buzz" + "<br>")
			continue;
		}
		else{
document.write(counter + "<br>");
}
}
});