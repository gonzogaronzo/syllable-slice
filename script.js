
const word = "NAPKIN";
const splitIndex = 3; // correct syllable split between P and K

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
  } else {
    feedback.textContent = "❌ Missed it!";
    feedback.style.color = "red";
  }
}

renderWord();
