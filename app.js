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
    y: 0,
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

// Función para dibujar la araña (cuadrado negro)
function drawSpider() {
    ctx.fillStyle = 'black';
    ctx.fillRect(spider.x * tileSize, spider.y * tileSize, tileSize, tileSize);
}

// Función para actualizar el canvas
function update() {
    // Limpiar el canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Dibujar la cuadrícula
    drawGrid();

    // Dibujar la araña
    drawSpider();
}

// Manejar los movimientos de la araña
document.addEventListener('keydown', (event) => {
    switch (event.key) {
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
    update();
});
