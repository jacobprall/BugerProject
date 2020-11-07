import React from "react";
import Button from '../../UI/Button/Button'
const orderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients).map((igKey) => {
    return (
      <li>
        <span style={{ textTransform: "capitalize" }}>{igKey}</span>:{" "}
        {props.ingredients[igKey]}
      </li>
    );
  });
  return (
    <div>
      <h3>Your Order</h3>
      <p>Delicious Burger with the following ingredients</p>
      <ul>{ingredientSummary}</ul>
      {"$" + props.price.toFixed(2)}
      <p>Continue to Checkout?</p>
      <Button btnType={"Danger"} clicked={props.purchaseCancel}>CANCEL</Button>
      <Button btnType={"Success"} clicked={props.purchaseContinue}>CONTINUE</Button>
    </div>
  );
};

export default orderSummary;
