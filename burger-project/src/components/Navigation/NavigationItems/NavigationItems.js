import React from "react";
import "./NavigationItems.css";
import NavigationItem from '../NavigationItems/NavigationItem/NavigationItem'
export default function NavigationItems() {
  return (
    <ul className="NavigationItems">
      <NavigationItem link="/" >Burger Builder</NavigationItem>
      <NavigationItem link="/">Checkout</NavigationItem>
    </ul>
  );
}
