// import { useState } from "react";
import MovieList from "./MovieList";
import WatchList from "./WatchList";

function Main({ movies, setMovies, watched, setWatched }) {
  return (
    <main className="main">
      <MovieList movies={movies} setMovies={setMovies} />
      <WatchList watched={watched} setWatched={setWatched} />
    </main>
  );
}

export default Main;
