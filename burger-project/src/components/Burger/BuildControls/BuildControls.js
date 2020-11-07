import React from "react";
import "./BuildControls.css";
import BuildControl from "./BuildControl/BuildControl";
const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" },
];

const buildControls = ({ addIngredientHandler, removeIngredientHandler, price, purchasable, onClick }) => {
  return (
    <div className="BuildControls">
      <p>
        Current Price: <strong>${price} </strong>
      </p>
      {controls.map((ctrl) => (
        <BuildControl
          key={ctrl.label}
          label={ctrl.label}
          addIngredient={() => addIngredientHandler(ctrl.type)}
          removeIngredient={() => removeIngredientHandler(ctrl.type)}
        />
      ))}
      <button disabled={!purchasable} onClick={onClick} className="OrderButton">Order Now</button>
    </div>
  );
};

export default buildControls;
