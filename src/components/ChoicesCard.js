import React from "react";
import "./../styles/cards.css";

export default function ChoicesCard(props) {
  return (
    <div className="base-card card-front" style={props.baseColor}>
      <div className="cardLabel" style={props.baseColor}></div>
      <div className="cardHeader"></div>
      <div className="cardSubs">A</div>
      <div className="cardContent">{props.content[0]}</div>
      <div>
        <div className="cardSubs">B</div>
        <div className="cardContent">{props.content[1]}</div>
      </div>
      <div className="cardFooter"></div>
    </div>
  );
}
