// Seleccionar el canvas
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Definir el tamaño del canvas
canvas.width = 400;
canvas.height = 400;

// Tamaño de cada "cuadrado" en la cuadrícula
const tileSize = 40;
const gridSize = canvas.width / tileSize;

// Posición inicial de la araña
let spider = {
    x: 0,
    y: 0
};

// Función para dibujar la cuadrícula
function drawGrid() {
    for (let x = 0; x < gridSize; x++) {
        for (let y = 0; y < gridSize; y++) {
            ctx.strokeStyle = '#ddd';
            ctx.strokeRect(x * tileSize, y * tileSize, tileSize, tileSize);
        }
    }
}

// Función para dibujar la araña
function drawSpider() {
    ctx.fillStyle = 'black';
    ctx.fillRect(spider.x * tileSize, spider.y * tileSize, tileSize, tileSize);
}

// Función para manejar el movimiento de la araña
function moveSpider(e) {
    switch (e.key) {
        case 'ArrowUp':
            if (spider.y > 0) spider.y--;
            break;
        case 'ArrowDown':
            if (spider.y < gridSize - 1) spider.y++;
            break;
        case 'ArrowLeft':
            if (spider.x > 0) spider.x--;
            break;
        case 'ArrowRight':
            if (spider.x < gridSize - 1) spider.x++;
            break;
    }
}

// Función de dibujo principal
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawGrid();
    drawSpider();
    requestAnimationFrame(draw);
}

document.addEventListener('keydown', moveSpider);  // Escuchar teclas
draw();  // Iniciar el ciclo de dibujo
