// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initNavigation();
});

function initNavigation() {
    // Set up all event listeners
    setupGuestButton();
    setupLogoutButton();
    setupDropdown();

    // Check and update auth state
    updateAuthUI();
}

function setupGuestButton() {
    const guestBtn = document.getElementById('guestBtn');
    if (guestBtn) {
        guestBtn.addEventListener('click', function() {
            // Set guest mode in localStorage
            localStorage.setItem('userType', 'guest');
            localStorage.setItem('isAuthenticated', 'true');
            localStorage.setItem('username', 'Guest');

            // Update UI
            updateAuthUI();

            // Show confirmation
            alert('You are now browsing in guest mode. Enjoy your experience!');

            // Debug log
            console.log('Guest mode activated');
        });
    }
}

function setupLogoutButton() {
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function(e) {
            e.preventDefault();

            // Clear authentication data
            localStorage.removeItem('userType');
            localStorage.removeItem('isAuthenticated');
            localStorage.removeItem('username');

            // Update UI
            updateAuthUI();

            // Hide dropdown
            const dropdown = document.getElementById('dropdownMenu');
            if (dropdown) dropdown.classList.remove('show');

            // Debug log
            console.log('User logged out');
        });
    }
}

function setupDropdown() {
    const userAvatar = document.getElementById('userAvatar');
    if (userAvatar) {
        userAvatar.addEventListener('click', function(e) {
            e.stopPropagation();
            toggleDropdown();
        });
    }

    // Close dropdown when clicking outside
    document.addEventListener('click', function() {
        const dropdown = document.getElementById('dropdownMenu');
        if (dropdown && dropdown.classList.contains('show')) {
            dropdown.classList.remove('show');
        }
    });
}

function toggleDropdown() {
    const dropdown = document.getElementById('dropdownMenu');
    if (dropdown) dropdown.classList.toggle('show');
}

function updateAuthUI() {
    const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
    const authButtons = document.getElementById('authButtons');
    const userProfile = document.getElementById('userProfile');
    const usernameDisplay = document.getElementById('usernameDisplay');
    const avatarInitials = document.getElementById('avatarInitials');

    if (isAuthenticated) {
        // User is authenticated (guest or logged in)
        if (authButtons) authButtons.style.display = 'none';
        if (userProfile) userProfile.style.display = 'flex';

        // Set username
        const username = localStorage.getItem('username') || 'Guest';
        if (usernameDisplay) usernameDisplay.textContent = username;

        // Set avatar initials
        if (avatarInitials) {
            const initials = username.split(' ').map(n => n[0]).join('').toUpperCase();
            avatarInitials.textContent = initials || 'G';
        }
    } else {
        // User is not authenticated
        if (authButtons) authButtons.style.display = 'flex';
        if (userProfile) userProfile.style.display = 'none';
    }
}