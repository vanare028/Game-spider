// Seleccionar el canvas
const canvas = document.getElementById('gameCanvas');  // Asegúrate de que el ID 'gameCanvas' exista en el HTML
const ctx = canvas.getContext('2d');

// Definir el tamaño del canvas
canvas.width = 400;  // Establecemos el ancho del canvas a 400px
canvas.height = 400;  // Establecemos el alto del canvas a 400px

// Tamaño de cada "cuadrado" en la cuadrícula
const tileSize = 40;  // Cada cuadrado de la cuadrícula será de 40x40 píxeles
const gridSize = canvas.width / tileSize;  // Esto nos da el tamaño de la cuadrícula (número de cuadrados en el canvas)

// Posición inicial de la araña
let spider = {
    x: 0,  // Coordenada inicial en el eje X (columna)
    y: 0   // Coordenada inicial en el eje Y (fila)
};

// Función para dibujar la cuadrícula
function drawGrid() {
    for (let x = 0; x < gridSize; x++) {
        for (let y = 0; y < gridSize; y++) {
            ctx.strokeStyle = '#ddd';  // Color de las líneas de la cuadrícula
            ctx.strokeRect(x * tileSize, y * tileSize, tileSize, tileSize);  // Dibujar un cuadrado en la posición (x, y)
        }
    }
}

// Función para dibujar la araña (cuadrado negro)
function drawSpider() {
    ctx.fillStyle = 'black
