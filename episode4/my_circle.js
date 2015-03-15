window.onload = function() {
	var canvas = document.getElementById("canvas"),
		context = canvas.getContext("2d"),
		width = canvas.width = window.innerWidth,
		height = canvas.height = window.innerHeight,

		centerX = width / 2,
		centerY = height / 2,
		radiusX = 100 + Math.random() * 100,
		radiusY = 100 + Math.random() * 100,
		angleX = Math.random() * Math.PI * 2,
		angleY = Math.random() * Math.PI * 2,
		speedX = Math.random() * .1 - .05,
		speedY = Math.random() * .1 - .05,
		x, y, i = 0;

	var render = function () {
		//context.clearRect(0, 0, width, height);
		angleX += speedX;
		angleY += speedY;
		x = Math.cos(angleX) * radiusX;
		y = Math.sin(angleY) * radiusY;
		context.beginPath();
		context.arc(width / 2 + x, height / 2 + y, 2, 0, Math.PI * 2, false);
		context.fill();


		requestAnimationFrame(render);
	};

	render();
};