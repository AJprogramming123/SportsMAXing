
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    
    const validUsername = "John_Doe";
    const validPassword = "abc123";

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === validUsername && password === validPassword) {
        
        const fullName = "John Doe"; 
        localStorage.setItem('fullName', fullName);

        
        
        window.location.href = 'index.html';
    } else {
        alert('Invalid username or password. Please try again.');
    }
});



