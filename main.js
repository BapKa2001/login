document.getElementById('show-register').addEventListener('click', () => {
    document.getElementById('login-form').classList.add('hidden');
    document.getElementById('register-form').classList.remove('hidden');
});

document.getElementById('show-login').addEventListener('click', () => {
    document.getElementById('register-form').classList.add('hidden');
    document.getElementById('login-form').classList.remove('hidden');
});

document.getElementById('register').addEventListener('submit', () => {
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;

    localStorage.setItem('user', JSON.stringify({ email, password }));

    alert('Registration successful! Please login.');
    document.getElementById('register-form').classList.add('hidden');
    document.getElementById('login-form').classList.remove('hidden');
});

document.getElementById('login').addEventListener('submit', () => {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (storedUser && storedUser.email === email && storedUser.password === password) {
        alert('Login successful!');
        document.getElementById('login-form').classList.add('hidden');
        document.getElementById('chat-container').classList.remove('hidden');
    } else {
        alert('Invalid email or password.');
    }
});

document.getElementById('chat-form').addEventListener('submit', () => {
    const message = document.getElementById('chat-message').value;
    const chatBox = document.getElementById('chat-box');

    const messageElement = document.createElement('p');
    messageElement.textContent = message;
    chatBox.appendChild(messageElement);

    document.getElementById('chat-message').value = '';
});
