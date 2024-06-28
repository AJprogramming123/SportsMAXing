
document.getElementById('loginForm').addEventListener('submit', function(event) {

    event.preventDefault();

  
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const validUsername = "John_Doe";
    const validPassword = "abc123";

    
    if (username === validUsername && password === validPassword) {

        window.location.href = 'HTML_LOGGED/home.html';

    } else {
        alert('Invalid username or password.\n\nTRY:\nUsername: John_Doe\nPassword: abc123');
    }
});
