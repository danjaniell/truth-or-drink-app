import React, { useState, useEffect } from "react";
import useAxios from "axios-hooks";
import Loading from "./Loading";

export default function DeckSelection(props) {
  const [selectedDeck, setSelectedDeck] = useState("");
  const [{ data, loading, error }] = useAxios(
    "https://truth-or-drink-api.vercel.app/decks"
  );

  useEffect(() => {
    if (props.onChange) {
      props.onChange(selectedDeck);
    }
  }, [props, selectedDeck]);

  function deck_list() {
    let decks = data.decks.map((deck) => (
      <option key={deck} value={deck}>
        {deck.replace(/([A-Z])/g, " $1").trim()}
      </option>
    ));
    // Exclude last deck
    decks.splice(decks.length - 1, 1);
    return decks;
  }

  if (loading) return <Loading />;
  if (error) return <p>Error!</p>;

  return (
    <>
      <label htmlFor="deck-select">
        <select
          name="deck"
          id="deck-select"
          value={selectedDeck}
          onChange={(e) => setSelectedDeck(e.target.value)}
          onBlur={(e) => setSelectedDeck(e.target.value)}
          style={props.style}
        >
          <option value="">--Select a deck--</option>
          {deck_list()}
        </select>
      </label>
    </>
  );
}
