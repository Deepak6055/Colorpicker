let score = 0;
let targetColorIndex;
let targetRGB;

const colors = [
    { name: "Red", rgb: [255, 0, 0] },
    { name: "Green", rgb: [0, 255, 0] },
    { name: "Blue", rgb: [0, 0, 255] },
    { name: "Yellow", rgb: [255, 255, 0] }
];

function generateRandomRGB() {
    return [Math.floor(Math.random() * 256), Math.floor(Math.random() * 256), Math.floor(Math.random() * 256)];
}

function getColorName(rgb) {
    let minDistance = Number.MAX_VALUE;
    let closestColorIndex = -1;
    for (let i = 0; i < colors.length; i++) {
        const distance = calculateDistance(colors[i].rgb, rgb);
        if (distance < minDistance) {
            minDistance = distance;
            closestColorIndex = i;
        }
    }
    return closestColorIndex;
}

function calculateDistance(rgb1, rgb2) {
    return Math.sqrt(
        Math.pow(rgb2[0] - rgb1[0], 2) +
        Math.pow(rgb2[1] - rgb1[1], 2) +
        Math.pow(rgb2[2] - rgb1[2], 2)
    );
}

function displayColor(colorIndex, rgbValue) {
    const colorBox = document.getElementById(`colorBox${colorIndex}`);
    colorBox.style.backgroundColor = `rgb(${rgbValue})`;
}

function startGame() {
    targetColorIndex = Math.floor(Math.random() * colors.length);
    targetRGB = colors[targetColorIndex].rgb;
    document.getElementById("rgbValue").textContent = `RGB Value to guess: ${targetRGB}`;
    for (let i = 0; i < colors.length; i++) {
        displayColor(i + 1, generateRandomRGB().join(", "));
    }
}

function checkColor(clickedColorIndex) {
    if (clickedColorIndex === targetColorIndex + 1) {
        score++;
        document.getElementById('score').textContent = `Score: ${score}`;
    }
    startGame();
}

// Initialize game
startGame();












