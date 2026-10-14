"use client";

import { useState } from "react";

export default function Home() {
  const facts = [
    "🌍 Earth is the only known planet to support life.",
    "🚀 Astronauts grow slightly taller in space.",
    "🪐 Saturn has more than 140 moons.",
    "🌕 The Moon has moonquakes.",
    "☀️ The Sun contains 99.8% of our Solar System's mass.",
    "🌌 There are billions of galaxies in the universe."
  ];

  const [fact, setFact] = useState(facts[0]);

  function newFact() {
    const random = Math.floor(Math.random() * facts.length);
    setFact(facts[random]);
  }

  return (
    <div
      style={{
        height: "100vh",
        background:
          "linear-gradient(135deg,#020024,#090979,#000000)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Arial",
        padding: "20px",
      }}
    >
      <div
        style={{
          width: "550px",
          backgroundColor: "rgba(255,255,255,0.12)",
          backdropFilter: "blur(15px)",
          borderRadius: "20px",
          padding: "35px",
          textAlign: "center",
          color: "white",
          boxShadow: "0 0 25px rgba(255,255,255,0.3)",
        }}
      >
        <div style={{ fontSize: "90px" }}>🪐</div>

        <h1
          style={{
            fontSize: "42px",
            color: "#7dd3fc",
            marginBottom: "10px",
          }}
        >
          Space Explorer
        </h1>

        <p style={{ color: "#ddd", fontSize: "18px" }}>
          Discover amazing facts about our universe.
        </p>

        <div
          style={{
            backgroundColor: "rgba(255,255,255,0.1)",
            padding: "25px",
            borderRadius: "15px",
            marginTop: "30px",
            marginBottom: "30px",
            minHeight: "120px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "22px",
          }}
        >
          {fact}
        </div>

        <button
          onClick={newFact}
          style={{
            backgroundColor: "#38bdf8",
            color: "white",
            border: "none",
            padding: "15px 35px",
            borderRadius: "40px",
            fontSize: "18px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          🚀 Discover More
        </button>
      </div>
    </div>
  );
}