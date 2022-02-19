import React, { useState } from "react";
import BaseCard from "./BaseCard";

export default function Front() {
  let [content] = useState(["You haven't selected a deck!"]);

  const baseColor = {
    background: "rgba( 0, 0, 0, 0.5 )",
  };

  return <BaseCard baseColor={baseColor} content={content} />;
}
