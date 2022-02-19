import React from "react";
import cardBack from "./../assets/base.png";
import "./../styles/cards.css";

export default function Back() {
  return (
    <div className="container">
      <div className="card-container">
        <img className="card-back" src={cardBack} alt="base-card-back" />
      </div>
    </div>
  );
}
