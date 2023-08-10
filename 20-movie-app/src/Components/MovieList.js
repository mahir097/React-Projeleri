import React from "react";

export default function MovieList({ movies, addFavouriteMovie }) {
  if (!movies) {
    return (
      <div>
        <h1>Movie List</h1>
        <div className="empty">No movies to display!</div>
      </div>
    );
  }
  return (
    <div className="movieList">
      {movies.slice(0, 5).map((movie) => {
        const { Title, imdbID, Poster } = movie;
        return (
          <div key={imdbID} onClick={() => addFavouriteMovie(movie)}>
            <img src={Poster} alt={Title} />
          </div>
        );
      })}
    </div>
  );
}
