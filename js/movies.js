const movies = [
    {
            title: "Dune: Part Two",
            genres: "Action, Adventure, Sci-Fi",
            runtime: "2h 46m",
            poster: "https://image.tmdb.org/t/p/original/b2z6OfWU3bjxjoFzJezG7I1exds.jpg",
            rating: "7.9"
        },
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
           title: "Black Bag",
           genres: "Action, Adventure, Sci-Fi",
           runtime: "2h 46m",
           poster: "https://image.tmdb.org/t/p/original/hHPovtU4b96LHcoeEwRkGHI5btw.jpg",
           rating: "7.9"
    },
   {
        title: "Fire Force",
        genres: "Action, Adventure, Sci-Fi",
        runtime: "2h 46m",
        poster: "https://image.tmdb.org/t/p/original/xg9y6QLZMkQWryymXvESSDBSLm0.jpg",
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

function createMovieCard(movie) {
  return `
    <div class="movie-card">
      <div class="movie-poster" style="background-image: url('${movie.poster}')"></div>
      <div class="movie-info">
        <h3 class="movie-title">${movie.title}</h3>
        <div class="movie-meta">${movie.genres} | ${movie.runtime} | ⭐ ${movie.rating}</div>
        <div class="movie-actions">
          <a href="https://www.themoviedb.org/" class="details-link">Details</a>
          <button class="buy-button" data-movie="${encodeURIComponent(movie.title)}">Buy</button>
        </div>
      </div>
    </div>
  `;
}

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("movie-list");
  movies.forEach(movie => {
    container.innerHTML += createMovieCard(movie);
  });

  document.querySelectorAll('.buy-button').forEach(btn => {
    btn.addEventListener('click', function() {
      const movieTitle = this.getAttribute('data-movie');
      window.location.href = "js/seat.html";
    });
  });
});
document.addEventListener("DOMContentLoaded", () => {
  // Get the movie title from URL parameters
  const urlParams = new URLSearchParams(window.location.search);
  const movieTitle = urlParams.get('movie');

  // Decode and display the movie title
  if (movieTitle) {
    document.getElementById('selected-movie').textContent =
      `Movie: ${decodeURIComponent(movieTitle)}`;
  }

  // Your existing seat selection logic here
  // ...
});
