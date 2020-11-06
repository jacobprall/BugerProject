import React, { useState, useEffect } from "react";
import Burger from "../../components/Burger/Burger";

export default function BurgerBuilder() {
  let [ingredients, setIngredients] = useState({
    salad: 1,
    bacon: 1,
    cheese: 2,
    meat: 2,
  });
  return (
    <div>
      <div>
        <Burger ingredients={ingredients}/>
      </div>
      <div>Build controls</div>
    </div>
  );
}
