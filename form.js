document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('#appointmentForm');
    
  
    form.addEventListener('submit', function(event) {
        event.preventDefault();  

        let isValid = true;  

       
        const inputs = form.querySelectorAll('input, select');
        inputs.forEach(input => {
            const errorMessage = input.nextElementSibling;  

           
            if (!input.checkValidity()) {
                errorMessage.style.display = 'block';  
                isValid = false;  
            } else {
                errorMessage.style.display = 'none';  
            }
        });

      
        if (isValid) {
            alert('Форма успешно отправлена!');
            form.reset();
        }
    });

 
    const inputs = form.querySelectorAll('input, select');
    inputs.forEach(input => {
        input.addEventListener('input', function() {
            const errorMessage = input.nextElementSibling;  
            if (input.checkValidity()) {
                errorMessage.style.display = 'none';  
            } else {
                errorMessage.style.display = 'block';  
            }
        });
    });



 
    const theme = localStorage.getItem('theme');
    const body = document.body;
    const formContainer = document.querySelector('.form-container');
    const labels = document.querySelectorAll('label');
    const themeToggle = document.getElementById('themeToggle');

    if (theme === 'night') {
        body.classList.add('night-mode');
        formContainer.classList.add('night-mode');
        labels.forEach(label => label.classList.add('night-mode'));
        themeToggle.checked = true;
    } else {
        body.classList.remove('night-mode');
        formContainer.classList.remove('night-mode');
        labels.forEach(label => label.classList.remove('night-mode'));
        themeToggle.checked = false;
    }
});


document.getElementById('themeToggle').addEventListener('change', function () {
    const body = document.body;
    const formContainer = document.querySelector('.form-container');
    const labels = document.querySelectorAll('label');

    if (this.checked) {
        body.classList.add('night-mode');
        formContainer.classList.add('night-mode');
        labels.forEach(label => label.classList.add('night-mode'));
        localStorage.setItem('theme', 'night');
    } else {
        body.classList.remove('night-mode');
        formContainer.classList.remove('night-mode');
        labels.forEach(label => label.classList.remove('night-mode'));
        localStorage.setItem('theme', 'day');
    }
});

function toggleMenu() {
    document.querySelector('.nav-links').classList.toggle('active');
  }


document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function(e) {
        const rect = this.getBoundingClientRect();
        const ripple = document.createElement('span');
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        ripple.style.width = ripple.style.height = `${size}px`;
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;
        ripple.style.position = 'absolute';
        ripple.style.borderRadius = '50%';
        ripple.style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
        ripple.style.pointerEvents = 'none';
        ripple.style.transform = 'scale(0)';
        ripple.style.opacity = '1';
        ripple.style.transition = 'transform 0.6s ease, opacity 0.6s ease';
        this.appendChild(ripple);

        requestAnimationFrame(() => {
            ripple.style.transform = 'scale(4)';
            ripple.style.opacity = '0';
        });

        ripple.addEventListener('transitionend', () => {
            ripple.remove();
        });
    });
});