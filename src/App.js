import React, { useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);

  /* 10.- GET request with fetch API */
  const fetchMoviesHandler = () => {
    fetch("https://swapi.py4e.com/api/films/")
      .then((response) => {
        return response.json();
      })
      .then((object) => {
        const recoveredMovies = object.results.map((movie) => {
          return {
            id: movie.episode_id,
            title: movie.title,
            releaseDate: movie.release_date,
            openingText: movie.opening_crawl,
          };
        });

        setMovies(recoveredMovies);
      });
  };

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={movies} />
      </section>
    </React.Fragment>
  );
}

export default App;
