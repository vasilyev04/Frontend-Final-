document.getElementById('themeToggle').addEventListener('change', function () {
    const body = document.body;
    const container = document.querySelector('.container');
    const footer = document.querySelector('footer');

    if (this.checked) {
        body.classList.add('night-mode');
        container.classList.add('night-mode');
        footer.classList.add('night-mode');
        localStorage.setItem('theme', 'night');
    } else {
        body.classList.remove('night-mode');
        container.classList.remove('night-mode');
        footer.classList.remove('night-mode');
        localStorage.setItem('theme', 'day'); 
    }
});


const button = document.getElementById('changeColorButton');
const colors = ['#FF5733', '#33FFBD', '#FF33A6', '#338AFF', '#FFD433', '#75FF33'];

function changeBackgroundColor() {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}

button.addEventListener('click', changeBackgroundColor);

function getCurrentDateTime() {
    const now = new Date();

    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        hour12: true
    };

    return now.toLocaleString('en-US', options);
}

function updateDateTime() {
    const dateTimeElement = document.getElementById('currentDateTime');
    dateTimeElement.textContent = getCurrentDateTime();
}

setInterval(updateDateTime, 1000);

window.onload = function() {
    updateDateTime();

  
    const theme = localStorage.getItem('theme');
    const body = document.body;
    const container = document.querySelector('.container');
    const footer = document.querySelector('footer');
    const themeToggle = document.getElementById('themeToggle');

    if (theme === 'night') {
        body.classList.add('night-mode');
        container.classList.add('night-mode');
        footer.classList.add('night-mode');
        themeToggle.checked = true; 
    } else {
        
        body.classList.remove('night-mode');
        container.classList.remove('night-mode');
        footer.classList.remove('night-mode');
        themeToggle.checked = false; 
    }
}

function showConfetti() {
    confetti(
        {
            particleCount: 200,
            spread: 200
        }
    );
}


var modal = document.getElementById("contactModal");
var btn = document.getElementById("contactBtn");
var span = document.querySelector(".close");

if (btn) {
    btn.onclick = function() {
        modal.style.display = "block";
    };
}

if (span) {
    span.onclick = function() {
        modal.style.display = "none";
    };
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};


function toggleMenu() {
    document.querySelector('.nav-links').classList.toggle('active');
  }
  
