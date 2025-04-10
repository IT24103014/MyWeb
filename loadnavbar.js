document.addEventListener('DOMContentLoaded', function() {
    // Load navigation bar
    fetch('navbar.html')
        .then(response => response.text())
        .then(data => {
            // Insert navigation at the beginning of the body
            document.body.insertAdjacentHTML('afterbegin', data);

            // Initialize navigation functionality
            initNavigation();

            // Highlight current page link
            highlightCurrentPage();
        })
        .catch(error => {
            console.error('Error loading navigation:', error);
        });
});
