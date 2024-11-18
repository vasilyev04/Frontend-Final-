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
    playSound(selectedRating);  // Воспроизведение звука для соответствующей звезды
  });
});

function updateStars(rating) {
  stars.forEach(star => {
    star.classList.toggle('selected', star.getAttribute('data-value') <= rating);
  });
}

function playSound(rating) {
  if (sounds[rating]) {
    sounds[rating].play();  // Воспроизведение звука для выбранной звезды
  }
}

function toggleMenu() {
  document.querySelector('.nav-links').classList.toggle('active');
}
