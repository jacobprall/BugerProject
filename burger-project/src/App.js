import React from "react";

import Layout from "./components/Layout/Layout.js";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import "./components/Layout/Layout.css";
function App() {
  return (
    <div>
      <Layout>
        <p>Test</p>
      </Layout>
      <BurgerBuilder />
    </div>
  );
}

export default App;
