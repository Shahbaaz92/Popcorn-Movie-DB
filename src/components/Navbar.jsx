import { useState } from "react";
import Search from "./Search";
import Logo from "./Logo";
import SearchResult from "./SearchResult";

function Navbar({ movies }) {
  const [query, setQuery] = useState("");

  return (
    <nav className="nav-bar">
      <Logo />
      <Search query={query} setQuery={setQuery} />
      <SearchResult movies={movies} />
    </nav>
  );
}

export default Navbar;
