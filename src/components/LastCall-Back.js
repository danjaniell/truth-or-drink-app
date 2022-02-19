import React from "react";
import cardBack from "./../assets/lc.png";
import "./../styles/cards.css";

export default function Back() {
  return (
    <div className="container">
      <div className="card-container">
        <img className="card-back" src={cardBack} alt="last-call-back" />
      </div>
    </div>
  );
}
