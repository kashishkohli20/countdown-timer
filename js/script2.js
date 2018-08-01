document.getElementById("count").addEventListener("click", function(){
	var x = document.getElementById("target").value;
	var target_date = Date.parse(x);
	var y = setInterval(function(){
		var current_date = new Date();
		var diff = target_date - current_date;
		var seconds = Math.floor((diff/1000) % 60);
		var minutes = Math.floor((diff/1000/60) % 60);
		var hours = Math.floor((diff/(1000*60*60)) % 24);
		var days = Math.floor(diff/(1000*60*60*24));
		console.log(days);
		console.log(hours);
		console.log(minutes);
		console.log(seconds);
		document.getElementById("days").innerHTML = days;
		document.getElementById("hours").innerHTML = hours;
		document.getElementById("minutes").innerHTML = minutes;
		document.getElementById("seconds").innerHTML = seconds;
		if(diff < 0){
			clearInterval(y);
			document.getElementsByTagName("body").innerHTML = "Time Expired"
		}
	}, 1000)

});
