window.onload = function(){
	var div = document.createElement('div');
	div.setAttribute('id', 'box');

	document.body.appendChild(div);
	setInterval(timer, 1000);
};

const timer = function() {
	var now = new Date();
	var h = now.getHours();
	var m = now.getMinutes();
	var s = now.getSeconds();

	if(h < 10){h = "0"+h}
	if(m < 10){h = "0"+m}
	if(s < 10){h = "0"+s}

	var clock = h+':'+m+':'+s;

	var div = document.getElementById('box');
	div.innerHTML = clock;
}
