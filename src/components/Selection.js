import React, { useState } from "react";
import "../styles/Child.css";

export default function Selection({ applyColor }) {
  let [color, setColor] = useState("");
  return (
    <div
      className="fix-box"
      style={{ background: color }}
      onClick={() => applyColor(setColor)}
    >
      <h2 className="subheading">Selection</h2>
    </div>
  );
}
