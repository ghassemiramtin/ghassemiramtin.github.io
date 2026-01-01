const ball = document.querySelectorAll('.ball')[0];

const rect_ball = ball.getBoundingClientRect();

let x = rect_ball.x;
let y = rect_ball.y; 

const speed = 20;

const MAX_HEIGHT = window.innerHeight;
const MAX_WIDTH = window.innerWidth;

function dropPixelFromBall(ball) {
	  const rect = ball.getBoundingClientRect();

	  // center of the ball
	  const centerX = rect.left + rect.width / 2;
	  const centerY = rect.top + rect.height / 2;

	  const pixel = document.createElement("div");
	  pixel.style.position = "absolute";
	  pixel.style.left = centerX + "px";
	  pixel.style.top = centerY + "px";
	  pixel.style.width = "2px";
	  pixel.style.height = "2px";
	  pixel.style.background = "red";
	  pixel.style.pointerEvents = "none";
	  document.body.appendChild(pixel);
}

document.addEventListener('keydown', (event) => {
	if (event.key === 'ArrowUp')    y = Math.max(0, y - speed);
	if (event.key === 'ArrowDown')  y = Math.min(y + speed, MAX_HEIGHT);
	if (event.key === 'ArrowLeft')  x = Math.max(0, x - speed);
	if (event.key === 'ArrowRight') x = Math.min(MAX_WIDTH, x + speed);

	 // Update the ball's position
	ball.style.top = y + 'px';
	ball.style.left = x + 'px';
	dropPixelFromBall(ball);
});
