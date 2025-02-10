import React, { useState, useEffect } from "react";
import "./home.css";

const FootballStream = () => {
  const [matches, setMatches] = useState([]);
  const [selectedMatch, setSelectedMatch] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMatches([
      { id: 1, teams: "Birinchi Kanal", streamUrl: "custom" },
    ]);
  }, []);

  return (
    <div className="stream-container">
      <header className="header">
        <div className="left">
          <button className="menu-button" onClick={() => setMenuOpen(true)}>
            ☰
          </button>
          <h3>UZFOX TV - FUTBOL UCHRASHUVLARI BIZ BILAN SIFATLIROQ!</h3>
        </div>
      </header>
      <div className="content">
        <aside className={`match-list ${menuOpen ? "open" : ""}`}>
          <button className="close-button" onClick={() => setMenuOpen(false)}>
            X
          </button>
          <h2>Kannalar</h2>
          <ul>
            {matches.map((match) => (
              <li key={match.id} onClick={() => {
                setSelectedMatch(match);
                setMenuOpen(false);
              }}>
                {match.teams}
              </li>
            ))}
          </ul>
        </aside>
        <main className="stream-view">
          {selectedMatch ? (
            selectedMatch.streamUrl === "custom" ? (
              <iframe
                src="https://livepush.io/embed/emNfF9qCvMOqZuod"
                allowFullScreen
              ></iframe>
            ) : (
              <iframe
                src={`${selectedMatch.streamUrl}&autoplay=1`}
                allow="autoplay; encrypted-media"
                allowFullScreen
              ></iframe>
            )
          ) : (
            <p>Matchni tanlang</p>
          )}
        </main>
      </div>
    </div>
  );
};

export default FootballStream;