const colors = ['#ff5733', '#33ff57', '#5733ff', '#ffff33', '#33ffff', '#ff33ff', '#ff5733', '#33ff57', '#5733ff', '#ffff33', '#33ffff', '#ff33ff'];

let tiles = [];
let flippedTiles = [];
let canFlip = true;

function startGame() {
  tiles = [];
  flippedTiles = [];
  canFlip = true;
  document.getElementById('container').innerHTML = '';
  for (let i = 0; i < 12; i++) {
    const tile = document.createElement('div');
    tile.classList.add('tile');
    tile.dataset.color = colors[i];
    tile.dataset.index = i;
    tile.onclick = flipTile;
    tiles.push(tile);
    document.getElementById('container').appendChild(tile);
  }
  setTimeout(hideTiles, 2000);
}

function flipTile() {
  if (!canFlip || flippedTiles.includes(this)) return;
  this.style.backgroundColor = this.dataset.color;
  flippedTiles.push(this);
  if (flippedTiles.length === 2) {
    checkMatch();
  }
}

function hideTiles() {
  tiles.forEach(tile => {
    tile.style.backgroundColor = '#ddd';
  });
  canFlip = true;
}

function checkMatch() {
  canFlip = false;
  if (flippedTiles[0].dataset.color === flippedTiles[1].dataset.color) {
    setTimeout(() => {
      flippedTiles.forEach(tile => {
        tile.style.visibility = 'hidden';
      });
      flippedTiles = [];
      canFlip = true;
    }, 1000);
  } else {
    setTimeout(() => {
      flippedTiles.forEach(tile => {
        tile.style.backgroundColor = '#ddd';
      });
      flippedTiles = [];
      canFlip = true;
    }, 1000);
  }
}
