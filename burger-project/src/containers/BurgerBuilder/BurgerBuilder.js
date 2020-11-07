import React, { useState, useEffect } from "react";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";

export default function BurgerBuilder() {
  let [ingredients, setIngredients] = useState({
    salad: 0,
    bacon: 0,
    cheese: 0,
    meat: 0,
  });
  let [totalPrice, setTotalPrice] = useState(4);
  let [purchasable, setPurchasable] = useState(false);
  let [openModal, setOpenModal] = useState(false);

  const purchaseHandler = () => {
    setOpenModal(true);
  };

  const closeModal = () => {
    setOpenModal(false);
  };

  const updatePurchaseState = () => {
    const ingrList = {
      ...ingredients,
    };
    const sum = Object.keys(ingrList)
      .map((igKey) => {
        return ingrList[igKey];
      })
      .reduce((acc, ele) => {
        return acc + ele;
      }, 0);
    setPurchasable(sum > 0);
  };
  const INGREDIENT_PRICES = { salad: 0.5, cheese: 0.4, meat: 1.3, bacon: 0.7 };
  const addIngredientHandler = (type) => {
    const oldCount = ingredients[type];
    const newCount = oldCount + 1;
    setIngredients(Object.assign(ingredients, { [type]: newCount }));
    const priceAddition = INGREDIENT_PRICES[type];
    const newPrice = totalPrice + priceAddition;
    setTotalPrice(newPrice);
    updatePurchaseState();
  };

  const purchaseContinueHandler = () => {
    alert("You continue!");
  };
  const purchaseCancelHandler = () => {
    alert("You cancelled!");
    setOpenModal(false)
  };

  const removeIngredientHandler = (type) => {
    const oldCount = ingredients[type];
    if (oldCount === 0) return;
    const newCount = oldCount - 1;
    setIngredients(Object.assign(ingredients, { [type]: newCount }));
    const priceSub = INGREDIENT_PRICES[type];
    const newPrice = totalPrice - priceSub;
    setTotalPrice(newPrice);
    updatePurchaseState();
  };

  return (
    <div>
      <Modal show={openModal} close={closeModal}>
        <OrderSummary
          price={totalPrice}
          ingredients={ingredients}
          purchaseCancel={purchaseCancelHandler}
          purchaseContinue={purchaseContinueHandler}
        />
      </Modal>
      <Burger ingredients={ingredients} />
      <BuildControls
        price={totalPrice.toFixed(2)}
        removeIngredientHandler={removeIngredientHandler}
        addIngredientHandler={addIngredientHandler}
        purchasable={purchasable}
        onClick={purchaseHandler}
      />
    </div>
  );
}
