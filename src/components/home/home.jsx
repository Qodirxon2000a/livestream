import React, { useState, useEffect } from "react";
import "./home.css";

const FootballStream = () => {
  const [matches, setMatches] = useState([
    { id: 1, teams: "Birinchi Kanal", streamUrl: "custom" }
  ]);
  const [selectedMatch, setSelectedMatch] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (matches.length > 0) {
      setSelectedMatch(matches[0]); // Sahifa yuklanganda birinchi kanal tanlanadi
    }
  }, [matches]);

  return (
    <div className="stream-container">
      <header className="header">
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>
        <h3>UZFOX TV - FUTBOL UCHRASHUVLARI BIZ BILAN SIFATLIROQ!</h3>
      </header>
      <div className="content">
        <aside className={`match-list ${menuOpen ? "open" : ""}`}>
          <button className="close-button" onClick={() => setMenuOpen(false)}>
            X
          </button>
          <h2>Kanallar</h2>
          <ul>
            {matches.map((match) => (
              <li key={match.id} onClick={() => { setSelectedMatch(match); setMenuOpen(false); }}>
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
                frameBorder="0"
              ></iframe>
            ) : (
              <iframe
                src={`${selectedMatch.streamUrl}&autoplay=1&controls=0`}
                title={selectedMatch.teams}
                frameBorder="0"
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
