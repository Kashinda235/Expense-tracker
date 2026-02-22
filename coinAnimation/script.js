const container = document.getElementById('coin-container');

function createCoin() {
    const coin = document.createElement('div');
    coin.classList.add('coin');

    // Randomize properties
    const size = Math.random() * (30 - 15) + 15 + 'px'; // Size between 15px and 30px
    const left = Math.random() * 100 + 'vw';            // Random horizontal start
    const duration = Math.random() * (4 - 2) + 2 + 's'; // Fall speed between 2s and 4s
    const delay = Math.random() * 5 + 's';              // Random start delay

    // Apply styles
    coin.style.width = size;
    coin.style.height = size;
    coin.style.left = left;
    coin.style.animationDuration = `${duration}, ${Math.random() * 1 + 0.5}s`;
    coin.style.animationDelay = `0s, ${delay}`;

    container.appendChild(coin);

    // Remove coin after animation ends to keep DOM clean
    setTimeout(() => {
        coin.remove();
    }, parseFloat(duration) * 1000);
}

// Generate a new coin every 200ms
setInterval(createCoin, 200);