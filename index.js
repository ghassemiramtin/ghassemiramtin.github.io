const ball = document.querySelectorAll('.ball')[0];

const rect_ball = ball.getBoundingClientRect();

let x = rect_ball.x;
let y = rect_ball.y; 

const speed = 20;

const MAX_HEIGHT = window.innerHeight;
const MAX_WIDTH = window.innerWidth;

document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowUp')    y = Math.max(0, y - speed);
    if (event.key === 'ArrowDown')  y = Math.min(y + speed, MAX_HEIGHT);
    if (event.key === 'ArrowLeft')  x = Math.max(0, x - speed);
    if (event.key === 'ArrowRight') x = Math.min(MAX_WIDTH, x + speed);

    // Update the ball's position
    ball.style.top = y + 'px';
    ball.style.left = x + 'px';
});
