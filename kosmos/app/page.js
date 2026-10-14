"use client";

import { useState } from "react";

export default function Home() {
  const spaceFacts = [
    "🌍 Earth is the only known planet that supports life.",
    "☀️ The Sun contains 99.8% of the Solar System's mass.",
    "🌕 The Moon is moving away from Earth by about 3.8 cm every year.",
    "🪐 Saturn could float in water because it is less dense than water.",
    "🌌 One day on Venus is longer than one year on Venus.",
    "⭐ There are more stars in the universe than grains of sand on Earth.",
    "🚀 The International Space Station travels at about 28,000 km/h.",
    "🛰️ Light from the Sun takes about 8 minutes to reach Earth."
  ];

  const [fact, setFact] = useState(spaceFacts[0]);

  const showFact = () => {
    const randomIndex = Math.floor(Math.random() * spaceFacts.length);
    setFact(spaceFacts[randomIndex]);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to bottom, #000428, #004e92)",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          width: "500px",
          textAlign: "center",
          padding: "30px",
          borderRadius: "15px",
          backgroundColor: "rgba(255,255,255,0.1)",
          boxShadow: "0 0 20px rgba(255,255,255,0.2)",
        }}
      >
        <h1 style={{ fontSize: "40px" }}>🚀 Space Explorer</h1>

        <p style={{ fontSize: "18px", marginTop: "20px" }}>
          Click the button to discover a random space fact!
        </p>

        <div
          style={{
            margin: "25px 0",
            padding: "20px",
            backgroundColor: "#1a1a40",
            borderRadius: "10px",
            minHeight: "100px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "18px",
          }}
        >
          {fact}
        </div>

        <button
          onClick={showFact}
          style={{
            padding: "12px 25px",
            fontSize: "18px",
            border: "none",
            borderRadius: "8px",
            backgroundColor: "#00c3ff",
            color: "white",
            cursor: "pointer",
          }}
        >
          Show Random Fact
        </button>
      </div>
    </div>
  );
}