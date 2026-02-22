const container = document.getElementById('coin-container');

function createCoin() {
    const wrapper = document.createElement('div');
    const coin = document.createElement('div');
    
    wrapper.classList.add('fall-wrapper');
    coin.classList.add('coin');

    // Randomize Size
    const size = Math.floor(Math.random() * 20) + 15 + 'px';
    coin.style.width = size;
    coin.style.height = size;

    // Randomize Position & Speed
    wrapper.style.left = Math.random() * 100 + 'vw';
    const fallDuration = Math.random() * 3 + 2 + 's'; // 2-5 seconds to fall
    const flipDuration = Math.random() * 0.5 + 0.5 + 's'; // 0.5-1 second to flip
    
    wrapper.style.animationDuration = fallDuration;
    coin.style.animationDuration = flipDuration;

    wrapper.appendChild(coin);
    container.appendChild(wrapper);

    // Remove element after it falls off screen
    setTimeout(() => {
        wrapper.remove();
    }, parseFloat(fallDuration) * 1000);
}

// Spawn coins frequently
setInterval(createCoin, 150);