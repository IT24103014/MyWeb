document.addEventListener('DOMContentLoaded', function() {
    const signupForm = document.getElementById('signupForm');
    const signinLink = document.querySelector('.signup-footer a');
    
    // Form submission
    if (signupForm) {
        signupForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const fullname = document.getElementById('fullname').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirmPassword').value;
            const terms = document.getElementById('terms').checked;
            
            // Simple validation
            if (!fullname || !email || !phone || !password || !confirmPassword) {
                alert('Please fill in all required fields');
                return;
            }
            
            if (password !== confirmPassword) {
                alert('Passwords do not match');
                return;
            }
            
            if (!terms) {
                alert('You must agree to the terms and conditions');
                return;
            }
            
            // In a real app, you would send this to your backend
            console.log('Signup data:', { fullname, email, phone, password });
            
            // For demo, redirect to home page
            alert('Account created successfully! Redirecting to home page...');
            window.location.href = 'index.html';
        });
    }
    
    // Signin link
    if (signinLink) {
        signinLink.addEventListener('click', function(e) {
            e.preventDefault();
            window.location.href = 'login.html';
        });
    }
});