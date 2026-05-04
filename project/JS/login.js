document.querySelector('login-window').addEventListener('submit', async (event) => {
    event.preventDefault();

    const email = document.querySelector('.email-input').value;
    const password = document.querySelector('.password-input').value;

    try {
        const response = await fetch('https://webfinalapi.mobydev.kz/auth/login', {

            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        })
        if (response.ok) {
            const {token} = await response.json();
            localStorage.setItem('authToken', token);
            window.location.href = 'index.html';
        } else {
            alert('Неверный email или пароль. Пожалуйста, попробуйте снова.');
        }

} catch (error) {
        console.error('Ошибка при попытке авторизации:', error);
        alert('Произошла ошибка при попытке входа. Пожалуйста, попробуйте снова позже.');
    }
});