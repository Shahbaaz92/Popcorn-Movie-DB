// import { useState } from "react";
import MovieBox from "./MovieBox";
import WatchList from "./WatchBox";

function MainBox({ movies, setMovies, watched, setWatched }) {
  return (
    <main className="main">
      <MovieBox movies={movies} setMovies={setMovies} />
      <WatchList watched={watched} setWatched={setWatched} />
    </main>
  );
}

export default MainBox;
