import React from "react";
import cardBack from "./../assets/ed.png";
import "./../styles/cards.css";

export default function ExtraDirtyBack() {
  return (
    <div className="container">
      <div className="card-container">
        <img className="card-back" src={cardBack} alt="extra-dirty-back" />
      </div>
    </div>
  );
}
