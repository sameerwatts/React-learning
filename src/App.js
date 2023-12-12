import React, { useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  async function fetchMoviesHandler() {
    setIsLoading(true);
    setMovies([]);
    setError(null);

    try {
      const response = await fetch("https://swapi.dev/api/films/");
      if (!response.ok) {
        throw new Error("Failed to fetch movies");
      }
      const resData = await response.json();


      const transformedMovies = resData.results.map((movieData) => ({
        id: movieData.episode_id,
        title: movieData.title,
        openingText: movieData.opening_crawl,
        releaseDate: movieData.release_date,
      }));
      setMovies(transformedMovies);
    } catch (err) {
      setError(err.message || "Failed to fetch movies");
    }
    setIsLoading(false);
  }

  let content = <p>Click button to fetch movies</p>

  if(isLoading) {
    content = <h2 style={{ textAlign: "center" }}>Loading movies...</h2>
  }

  if(movies.length > 0) {
    content = <MoviesList movies={movies} />;
  }

  if(error) {
    content =  <p>{error}</p>;
  }
  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler} disabled={isLoading}>
          Fetch Movies
        </button>
      </section>
      {
        <section>
          {/* {!isLoading && movies.length === 0 && !error && (
            <p>Click button to fetch movies</p>
          )}
          {isLoading && movies.length === 0 && (
            <h2 style={{ textAlign: "center" }}>Loading movies...</h2>
          )}
          {!isLoading && movies.length > 0 && <MoviesList movies={movies} />}
          {error && <p>{error}</p>} */}
          {content}
        </section>
      }
    </React.Fragment>
  );
}

export default App;
