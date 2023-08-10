import React, { useEffect, useState } from "react";
import "./App.css";
import Heading from "./Components/Heading";
import Search from "./Components/Search";
import MovieList from "./Components/MovieList";
import Favourites from "./Components/Favourites";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [favourites, setFavourites] = useState([]);

  const getMovieRequest = async (searchValue) => {
    const url = `https://www.omdbapi.com/?s=${searchValue}&apikey=263d22d8`;

    const response = await fetch(url);
    const responseJson = await response.json();
    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }
  };
  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);

  useEffect(() => {
    const movieFavourites = JSON.parse(
      localStorage.getItem("react-movie-app-favourites")
    );
    if (movieFavourites) setFavourites(movieFavourites); //if yazmayınca hata veriyor
  }, []);

  const saveToLocalStorage = (items) => {
    localStorage.setItem("react-movie-app-favourites", JSON.stringify(items));
  };

  const addFavouriteMovie = (movie) => {
    const newFavouriteList = [...favourites, movie];

    setFavourites(newFavouriteList);
    saveToLocalStorage(newFavouriteList);
  };

  const removeFavouriteMovie = (movie) => {
    const newFavouriteList = favourites.filter(
      (favourite) => favourite.imdbID !== movie.imdbID
    );
    setFavourites(newFavouriteList);
    saveToLocalStorage(newFavouriteList);
  };

  return (
    <div className="App">
      <Heading>Movie App</Heading>
      <Search searchValue={searchValue} setSearchValue={setSearchValue} />
      <MovieList movies={movies} addFavouriteMovie={addFavouriteMovie} />
      <Favourites
        favourites={favourites}
        removeFavourites={removeFavouriteMovie}
      />
    </div>
  );
}

export default App;
