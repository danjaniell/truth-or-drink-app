import React from "react";
import "./../styles/cards.css";

export default function BaseCard(props) {
  return (
    <div className="base-card card-front" style={props.baseColor}>
      <div className="cardLabel" style={props.baseColor}></div>
      <div className="cardHeader">THIS ROUND'S ON ME</div>
      <div className="cardContent">{props.content[0]}</div>
      <div className="cardFooter">Everybody else answers.</div>
    </div>
  );
}
