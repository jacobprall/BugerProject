import React from "react";
import Logo from "../../Logo/Logo";
import './Toolbar.css'
import NavigationItems from '../NavigationItems/NavigationItems'

export default function Toolbar() {
  return (
    <header className={"Toolbar"}>
      <div>MENU</div>
      <div className={"Logo"}>
        <Logo height="80%" />
      </div>
      <nav>
        <NavigationItems />
      </nav>
    </header>
  );
}
