import React, { useState, useEffect } from "react";
import "./home.css";
import Videos from "../home/UZFOX.mp4";

const FootballStream = () => {
  const [matches, setMatches] = useState([
    { id: 1, teams: "Birinchi Kanal", streamUrl: "custom" }
  ]);
  const [selectedMatch, setSelectedMatch] = useState(null);

  useEffect(() => {
    if (matches.length > 0) {
      setSelectedMatch(matches[0]); // Sahifa yuklanganda birinchi kanal tanlanadi
    }
  }, [matches]);

  return (
    <div className="stream-container">
      <header className="header">
        <div className="left">
          <div className="text_left">
            <h3>UZFOX TV - FUTBOL UCHRASHUVLARI BIZ BILAN SIFATLIROQ!</h3>
          </div>
        </div>
      </header>
      <div className="content">
        <aside className="match-list">
          <h2>Kanallar</h2>
          <ul>
            {matches.map((match) => (
              <li key={match.id} onClick={() => setSelectedMatch(match)}>
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
                width="100%"
                height="100%"
                allowFullScreen
                frameBorder="0"
                style={{ border: "none" }}
              ></iframe>
            ) : (
              <iframe
                width="100%"
                height="100%"
                src={`${selectedMatch.streamUrl}&autoplay=1&controls=0&disablekb=1&fs=0&modestbranding=1&rel=0&showinfo=0`}
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
