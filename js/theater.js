// Theater location data
const theaterLocations = [
    {
        name: "Colombo City Center",
        address: "Level 5, Colombo City Center, 30 Sir Chittampalam A Gardiner Mawatha, Colombo 02",
        image: "https://images.unsplash.com/photo-1542051841857-5f90071e7989?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        screens: 8,
        phone: "0112 345 678"
    },
    {
        name: "One Galle Face Mall",
        address: "Level 6, One Galle Face Mall, 1A, Centre Road, Colombo 01",
        image: "https://images.unsplash.com/photo-1581539250439-c96689b516dd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        screens: 6,
        phone: "0112 987 654"
    },
    {
        name: "Negombo Cineplex",
        address: "2nd Floor, Negombo City Center, Lewis Place, Negombo",
        image: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        screens: 5,
        phone: "0312 345 678"
    },
    {
        name: "Kandy Cinemas",
        address: "3rd Floor, Kandy City Center, Dalada Veediya, Kandy",
        image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        screens: 4,
        phone: "0812 345 678"
    },
    {
        name: "Galle Fort Cinema",
        address: "22 Church Street, Galle Fort, Galle",
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        screens: 3,
        phone: "0912 345 678"
    },
    {
        name: "Jaffna Cineplex",
        address: "45 Temple Road, Nallur, Jaffna",
        image: "https://images.unsplash.com/photo-1581852057101-4d8b9cf34593?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        screens: 4,
        phone: "0212 345 678"
    }
];

// Function to create location card HTML
function createLocationCard(location) {
    return `
        <div class="location-card">
            <div class="location-image" style="background-image: url('${location.image}')"></div>
            <div class="location-info">
                <h3>${location.name}</h3>
                <p>${location.address}</p>
                <div class="location-meta">
                    <span>${location.screens} screens</span>
                    <span>${location.phone}</span>
                </div>
                <div class="location-actions">
                    <a href="movies.html" class="details-link">View Movies</a>
                    <button class="directions-btn">Get Directions</button>
                </div>
            </div>
        </div>
    `;
}

// Function to render locations
function renderLocations() {
    const locationGrid = document.getElementById('location-grid');
    
    theaterLocations.forEach(location => {
        locationGrid.innerHTML += createLocationCard(location);
    });
}

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    renderLocations();
    
    // Add event listeners to all direction buttons
    document.querySelectorAll('.directions-btn').forEach(button => {
        button.addEventListener('click', function() {
            const theaterName = this.closest('.location-card').querySelector('h3').textContent;
            alert(`Directions to ${theaterName} would be displayed here.`);
        });
    });
    
    // Make navbar sticky when scrolling (matches home page)
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.2)';
        } else {
            navbar.style.backgroundColor = '#111';
            navbar.style.boxShadow = 'none';
        }
    });
});