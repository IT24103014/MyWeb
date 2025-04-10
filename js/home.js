// Movie data
const nowShowingMovies = [
    {
                title: "Devil May Cry ",
                genres: "Action, Adventure, Sci-Fi",
                runtime: "2h 46m",
                poster: "https://image.tmdb.org/t/p/original/syY5tQzZDdiwGx71cj1Zz4rtrDL.jpg",
                rating: "7.9"
      },
    {
            title: "Karma",
            genres: "Action, Adventure, Sci-Fi",
            runtime: "2h 46m",
            poster: "https://image.tmdb.org/t/p/original/2G99FfWYCAdsmAIZO8zGFjcDidY.jpg",
            rating: "7.9"
        },
    {
        title: "Dune: Part Two",
        genres: "Action, Adventure, Sci-Fi",
        runtime: "2h 46m",
        poster: "https://m.media-amazon.com/images/M/MV5BN2FjNmEyNWMtYzM0ZS00NjIyLTg5YzYtYThlMGVjNzE1OGViXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg",
        rating: "7.9"
    },
    {
        title: "Kingdom of the Planet of the Apes",
        genres: "Action, Adventure, Sci-Fi",
        runtime: "2h 25m",
        poster: "https://image.tmdb.org/t/p/original/gKkl37BQuKTanygYQG1pyYgLVgf.jpg",
        rating: "7.9"
    },
    {
        title: "Godzilla x Kong: The New Empire",
        genres: "Action, Adventure, Sci-Fi",
        runtime: "1h 55m",
        poster: "https://image.tmdb.org/t/p/original/z1p34vh7dEOnLDmyCrlUVLuoDzd.jpg",
        rating: "7.9"
    },
    {
        title: "The Fall Guy",
        genres: "Action, Comedy",
        runtime: "2h 6m",
        poster: "https://image.tmdb.org/t/p/original/e7olqFmzcIX5c23kX4zSmLPJi8c.jpg",
        rating: "7.9"
    }
];

const comingSoonMovies = [
    {
        title: "Deadpool & Wolverine",
        genres: "Action, Adventure, Comedy",
        runtime: "2h 15m",
        poster: "https://image.tmdb.org/t/p/original/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg",
        rating: "7.9"
    },
    {
        title: "A Quiet Place: Day One",
        genres: "Horror, Sci-Fi, Thriller",
        runtime: "1h 45m",
        poster: "https://image.tmdb.org/t/p/original/hU42CRk14JuPEdqZG3AWmagiPAP.jpg",
        rating: "7.9"
    },
    {
        title: "Alien: Romulus",
        genres: "Horror, Sci-Fi",
        runtime: "2h 10m",
        poster: "https://image.tmdb.org/t/p/original/b33nnKl1GSFbao4l3fZDDqsMx0F.jpg",
        rating: "7.9"
    },
    {
        title: "Twisters",
        genres: "Action, Drama, Thriller",
        runtime: "2h 5m",
        poster: "https://image.tmdb.org/t/p/original/pjnD08FlMAIXsfOLKQbvmO0f0MD.jpg",
        rating: "7.9"
    }
];

// Function to create movie card HTML
function createMovieCard(movie) {
    return `
        <div class="movie-card">
            <div class="movie-poster" style="background-image: url('${movie.poster}')"></div>
            <div class="movie-info">
                <h3 class="movie-title">${movie.title}</h3>
                <div class="movie-meta">
                    <span>${movie.genres}</span>
                    <span>${movie.rating ? `${movie.rating} <i class="fas fa-star"></i>` : `<i class="far fa-clock"></i> ${movie.runtime}`}</span>
                </div>
                <div class="movie-actions">
                    <a href="#" class="details-link">Details</a>
                    <button class="buy-button">Buy Ticket</button>
                </div>
            </div>
        </div>
    `;
}

// Function to render movies
function renderMovies() {
    const nowShowingContainer = document.getElementById('now-showing');
    const comingSoonContainer = document.getElementById('coming-soon');
    
    nowShowingMovies.forEach(movie => {
        nowShowingContainer.innerHTML += createMovieCard(movie);
    });
    
    comingSoonMovies.forEach(movie => {
        comingSoonContainer.innerHTML += createMovieCard(movie);
    });
}

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    renderMovies();

    // Add event listeners to all buy buttons
    document.querySelectorAll('.buy-button').forEach(button => {
        button.addEventListener('click', function () {
            const movieTitle = this.closest('.movie-card').querySelector('.movie-title').textContent;
            window.location.href = "js/seat.html"
        });
    });

})