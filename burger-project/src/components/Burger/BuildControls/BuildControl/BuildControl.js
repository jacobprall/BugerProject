import React from "react";
import "./BuildControl.css";

const buildControl = ({ addIngredient, label, removeIngredient }) => (
  <div className="BuildControl">
    <div className="Label">{label}</div>
    <button className="Less" onClick={removeIngredient}>Less</button>
    <button className="More" onClick={addIngredient}>
      More
    </button>
  </div>
);

export default buildControl;
