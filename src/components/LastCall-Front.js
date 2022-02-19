import React, { useState, useEffect } from "react";
import ChoicesCard from "./ChoicesCard";
import EveryoneCard from "./EveryoneCard";

export default function Front(props) {
  const [content, setContent] = useState("");
  const [cardType, setCardType] = useState("");
  const [currentCard, setCurrentCard] = useState(null);

  useEffect(() => {
    if (props) {
      setCurrentCard(props.current);
    }
  }, [props]);

  useEffect(() => {
    if (currentCard != null) {
      setCardType(currentCard.card_type);
      setContent(currentCard.prompts);
    }
  }, [currentCard]);

  const baseColor = {
    background: "rgba( 39, 10, 58, 0.4 )",
  };

  return cardType === "Everyone" ? (
    <EveryoneCard baseColor={baseColor} content={content} />
  ) : (
    <ChoicesCard baseColor={baseColor} content={content} />
  );
}
