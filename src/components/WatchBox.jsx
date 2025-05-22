import { useState } from "react";
import WatchList from "./WatchList";
import WatchedSumary from "./WatchedSummary";

function WatchBox({ watched }) {
  const [isOpen2, setIsOpen2] = useState(true);

  return (
    <div className="box">
      <button
        className="btn-toggle"
        onClick={() => setIsOpen2((open) => !open)}
      >
        {isOpen2 ? "–" : "+"}
      </button>
      {isOpen2 && (
        <>
          <WatchedSumary watched={watched} />
          <WatchList watched={watched} />
        </>
      )}
    </div>
  );
}

export default WatchBox;
