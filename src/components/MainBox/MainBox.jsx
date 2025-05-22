// import { useState } from "react";
import MovieBox from "./MovieBox/MovieBox";
import WatchBox from "./WatchedBox/WatchBox";

function MainBox({ movies, setMovies, watched, setWatched }) {
  return (
    <main className="main">
      <MovieBox movies={movies} setMovies={setMovies} />
      <WatchBox watched={watched} setWatched={setWatched} />
    </main>
  );
}

export default MainBox;
