import React, { useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  /* 10.- GET request with fetch API && await & async */
  const fetchMoviesHandler = async () => {
    setIsLoading(true);

    /* Way 2: await & async */
    const response = await fetch("https://swapi.py4e.com/api/films/");

    /* Way 1: Promises */
    response.json().then((object) => {
      const recoveredMovies = object.results.map((movie) => {
        return {
          id: movie.episode_id,
          title: movie.title,
          releaseDate: movie.release_date,
          openingText: movie.opening_crawl,
        };
      });

      setMovies(recoveredMovies);
      setIsLoading(false);
    });
  };

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {!isLoading && movies.length > 0 && <MoviesList movies={movies} />}
        {!isLoading && movies.length === 0 && <p>No movies found...</p>}
        {isLoading && <p>Loading...</p>}
      </section>
    </React.Fragment>
  );
}

export default App;
