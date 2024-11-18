const stars = document.querySelectorAll('.star');
let selectedRating = 0;

const sounds = {
  1: document.getElementById('sound1'),
  2: document.getElementById('sound2'),
  3: document.getElementById('sound3'),
  4: document.getElementById('sound4'),
  5: document.getElementById('sound5')
};

stars.forEach(star => {
  star.addEventListener('click', () => {
    selectedRating = star.getAttribute('data-value');
    updateStars(selectedRating);
    playSound(selectedRating);
  });
});

function updateStars(rating) {
  stars.forEach(star => {
    star.classList.toggle('selected', star.getAttribute('data-value') <= rating);
  });
}

function playSound(rating) {
  if (sounds[rating]) {
    sounds[rating].play();
  }
}

const readMoreButton = document.getElementById('readMoreBtn');
const moreText = document.getElementById('moreText');
const initialText = document.getElementById('initialText');

readMoreButton.addEventListener('click', function () {
  if (moreText.style.display === 'none') {
    moreText.style.display = 'inline';
    readMoreButton.textContent = 'Читать меньше';
    initialText.style.display = 'none';
  } else {
    moreText.style.display = 'none';
    readMoreButton.textContent = 'Читать далее';
    initialText.style.display = 'inline';
  }
});

function toggleMenu() {
  document.querySelector('.nav-links').classList.toggle('active');
}
