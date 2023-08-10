import React from "react";

export default function Favourites({ favourites, removeFavourites }) {
  if (!favourites) {
    return (
      <div>
        <h1>Favourites</h1>
        <div className="empty">No favourites added yet!</div>
      </div>
    );
  }
  return (
    <div>
      <h1>Favourites</h1>
      <div className="favourites">
        {favourites.map((movie) => {
          const { Title, imdbID, Poster } = movie;
          return (
            <div key={imdbID} onClick={() => removeFavourites(movie)}>
              <img src={Poster} alt={Title} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
