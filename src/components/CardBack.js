import React, { useState, useEffect } from "react";
import ProgressiveImage from "react-progressive-graceful-image";
import def_back from "./../assets/base.png";
import ed_back from "./../assets/ed.png";
import hh_back from "./../assets/hh.png";
import lc_back from "./../assets/lc.png";
import otr_back from "./../assets/otr.png";
import wat_back from "./../assets/wat.png";
import tiny_image from "./../assets/tiny-image.png";
import "./../styles/cards.css";

export default function CardBack(props) {
  const [cardBack, setCardBack] = useState(def_back);

  useEffect(() => {
    if (props) {
      switch (props.deckType) {
        case 1:
          setCardBack(otr_back);
          break;
        case 2:
          setCardBack(ed_back);
          break;
        case 3:
          setCardBack(hh_back);
          break;
        case 4:
          setCardBack(lc_back);
          break;
        case 5:
          setCardBack(wat_back);
          break;
        default:
          setCardBack(def_back);
          break;
      }
    }
  }, [props]);

  return (
    <div className="card-container">
      <ProgressiveImage src={cardBack} placeholder={tiny_image}>
        {(src, loading) => (
          <img
            className="card-back"
            style={{ opacity: loading ? 0.4 : 1 }}
            src={src}
            alt="back-of-the-card"
          />
        )}
      </ProgressiveImage>
    </div>
  );
}
