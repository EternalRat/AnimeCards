const { ipcRenderer } = require("electron");
const ipc = ipcRenderer;

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const canvasHeightPrct = 0.7
const canvasWidthPrct = 1

ctx.webkitImageSmoothingEnabled = false;
ctx.mozImageSmoothingEnabled = false;
ctx.imageSmoothingEnabled = false;


minimizeBtn.addEventListener('click', () => {
    ipc.send('minimizeApp');
});

closeBtn.addEventListener('click', () => {
    ipc.send('closeApp');
});

function gameLoop() {

	console.log()

	ctx.clearRect(0, 0, canvas.width, canvas.height)

	Game.drawEntities()
	
	Game.removedDeadEntities()
}

window.onload = () => {
	setInterval(gameLoop, 1000/20);
	canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;

	Game.addEntity(new Card(CardValue.One, Color.Red, undefined))

}