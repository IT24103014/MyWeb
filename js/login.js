const container = document.querySelector('.container');
const registerBtn = document.querySelector('.register-btn');
const loginBtn = document.querySelector('.login-btn');

registerBtn.addEventListener('click', () => {
    container.classList.add('active');
})

loginBtn.addEventListener('click', () => {
    container.classList.remove('active');
})

document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent default form action

    localStorage.clear();

    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
  
    // Save user data (without userType)
    const userData = {
      username,
      email,
      password // ⚠️ For demo only. Don’t store plain passwords in real apps.
    };
  
    // Store data separately
    localStorage.setItem('user', JSON.stringify(userData));
    localStorage.setItem('userType', 'Registered');
  
    console.log('User:', userData);
    console.log('UserType:', localStorage.getItem('userType'));
  
    // Optional: redirect or show confirmation
    window.location.href = 'home.html';
  });
  