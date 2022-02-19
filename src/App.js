import React, { useState, useEffect } from "react";
import DeckSelection from "./components/DeckSelection";
import Start from "./pages/Start";
import "./styles/app.css";

export default function App() {
  const [selectedDeck, setSelectedDeck] = useState("");
  const deckSelectHandler = (data) => setSelectedDeck(data);

  return (
    <>
      <DeckSelection onChange={deckSelectHandler} />
      <div className="main-container">
        <Start deck={selectedDeck} />
      </div>
    </>
  );
}
