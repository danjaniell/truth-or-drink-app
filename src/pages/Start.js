import React, { useState, useEffect } from "react";
import ReactCardFlip from "react-card-flip";
import useAxios from "axios-hooks";
import OnTheRocksFront from "./../components/OnTheRocks-Front";
import ExtraDirtyFront from "./../components/ExtraDirty-Front";
import HappyHourFront from "./../components/HappyHour-Front";
import LastCallFront from "./../components/LastCall-Front";
import WithATwistFront from "./../components/WithATwist-Front";
import DefaultCardFront from "./../components/DefaultCard-Front";
import CardBack from "../components/CardBack";
import Loading from "./../components/Loading";
import "./../styles/app.css";
import Decks from "./../common/DeckType";

function genCardFront(deck, card) {
  if (deck == null) {
    return <DefaultCardFront />;
  }

  if (card == null) {
    return null;
  }

  switch (deck) {
    case 1:
      return <OnTheRocksFront current={card} />;
    case 2:
      return <ExtraDirtyFront current={card} />;
    case 3:
      return <HappyHourFront current={card} />;
    case 4:
      return <LastCallFront current={card} />;
    case 5:
      return <WithATwistFront current={card} />;
    default:
      return <DefaultCardFront />;
  }
}

export default function Start(props) {
  const selectedDeck = Decks[props.deck];
  const [isFlipped, setIsFlipped] = useState(true);
  const [cardPile, setCardPile] = useState([]);
  const [discardPile, setDiscardPile] = useState([]);
  const [currentCard, setCurrentCard] = useState(null);
  const [cardFront, setCardFront] = useState(null);
  const [cardBack, setCardBack] = useState(null);
  const [{ data, loading, error }] = useAxios(
    `https://truth-or-drink-api.vercel.app/all-cards/from-deck/${selectedDeck}`
  );

  useEffect(() => {
    if (data) {
      setCardPile(data.cards);
      setDiscardPile([]);
      setIsFlipped(true);
    }
  }, [data]);

  useEffect(() => {
    setCardBack(<CardBack deckType={selectedDeck} />);
    setCardFront(genCardFront(selectedDeck, currentCard));
  }, [selectedDeck, currentCard]);

  function handleClick(e) {
    e.preventDefault();
    setIsFlipped(!isFlipped);

    if (isFlipped) {
      setCurrentCard(cardPile[Math.floor(Math.random() * cardPile.length)]);
      cardPile.splice(cardPile.indexOf(currentCard), 1);
      discardPile.push(currentCard);
    }
  }

  if (loading) return <Loading />;
  if (error) {
  }

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
      <div id="cardFront" onClick={handleClick}>
        {cardFront}
      </div>
      <div id="cardBack" onClick={handleClick}>
        {cardBack}
      </div>
    </ReactCardFlip>
  );
}
