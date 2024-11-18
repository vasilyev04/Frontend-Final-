document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');

    // Загрузка данных из localStorage
    const savedUsername = localStorage.getItem('username');
    const savedPassword = localStorage.getItem('password');

    if (savedUsername) {
        usernameInput.value = savedUsername;
    }
    if (savedPassword) {
        passwordInput.value = savedPassword;
    }

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault(); // предотвращает отправку формы и обновление страницы

        const username = usernameInput.value;
        const password = passwordInput.value;

        // Сохранение логина и пароля в localStorage
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);

        // Выводим сообщение для проверки и перенаправляем
        alert('Логин и пароль сохранены!');
        
        // Перенаправление на doctors.html
        window.location.href = 'index.html';
    });
});
