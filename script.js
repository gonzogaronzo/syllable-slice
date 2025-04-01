
const wordList = [{'word': 'NAPKIN', 'split': 3}, {'word': 'SUNSET', 'split': 3}, {'word': 'DENTIST', 'split': 3}, {'word': 'CACTUS', 'split': 3}, {'word': 'BATMAN', 'split': 3}, {'word': 'HAPPEN', 'split': 3}, {'word': 'UNLIT', 'split': 2}, {'word': 'INBOX', 'split': 2}, {'word': 'SUBMIT', 'split': 3}, {'word': 'CONTEST', 'split': 3}, {'word': 'PLASTIC', 'split': 4}, {'word': 'CAMPER', 'split': 3}, {'word': 'SANDAL', 'split': 3}, {'word': 'TICKET', 'split': 3}, {'word': 'FABRIC', 'split': 3}, {'word': 'PENCIL', 'split': 3}, {'word': 'WINDOW', 'split': 3}, {'word': 'FOSSIL', 'split': 3}, {'word': 'VELVET', 'split': 3}, {'word': 'GOBLET', 'split': 3}];

const { word, split: splitIndex } = wordList[Math.floor(Math.random() * wordList.length)];

const vowels = ['A', 'E', 'I', 'O', 'U'];
const board = document.getElementById('board');
const feedback = document.getElementById('feedback');

function renderWord() {
  board.innerHTML = '';
  for (let i = 0; i < word.length; i++) {
    const tile = document.createElement('div');
    tile.classList.add('tile');
    tile.textContent = word[i];
    if (vowels.includes(word[i])) {
      tile.classList.add('vowel');
    } else {
      tile.classList.add('consonant');
    }
    board.appendChild(tile);

    if (i < word.length - 1) {
      const slicer = document.createElement('div');
      slicer.classList.add('slice');
      slicer.addEventListener('click', () => checkSlice(i));
      board.appendChild(slicer);
    }
  }
}

function checkSlice(index) {
  if (index === splitIndex - 1) {
    feedback.textContent = "🥷 Correct Slice!";
    feedback.style.color = "green";
    setTimeout(() => {
      location.reload();
    }, 1500);
  } else {
    feedback.textContent = "❌ Missed it!";
    feedback.style.color = "red";
  }
}

renderWord();
