import React from "react";
import cardBack from "./../assets/wat.png";
import "./../styles/cards.css";

export default function Back() {
  return (
    <div className="container">
      <div className="card-container">
        <img className="card-back" src={cardBack} alt="with-a-twist-back" />
      </div>
    </div>
  );
}
