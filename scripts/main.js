	window.onload = function(){
		var canvas = document.createElement("canvas");
		document.body.appendChild(canvas);

		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;

		context = canvas.getContext("2d");
	}
