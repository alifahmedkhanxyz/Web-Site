// Simple Login Functionality
document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('loginForm');
  if(loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;

      if(username === 'alif' && password === '1234') {
        document.getElementById('loginMessage').textContent = '✅ Login Successful!';
        document.getElementById('loginMessage').style.color = '#0f0';
      } else {
        document.getElementById('loginMessage').textContent = '❌ Invalid Credentials!';
        document.getElementById('loginMessage').style.color = '#f00';
      }
    });
  }
});
