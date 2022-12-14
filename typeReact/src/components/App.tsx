import React from "react";
import data from "../data/data.json";
import AppCss from "./App.css";
import PizzaLogo from "../assets/svg/pizza.svg";

import Pizza from "./Pizza";
import Cart from "./Cart";
import AppStateProvider from "./AppState";

const App: React.FC = (): JSX.Element => {
  return (
    <AppStateProvider>
      <div className={AppCss.container}>
        <div className={AppCss.header}>
          <PizzaLogo width='150px' height='150px' />
          <div className={AppCss.siteTitle}>Delicious Pizza</div>
          <Cart />
          {data.map((pizza) => {
            return <Pizza key={pizza.id} pizza={pizza} />;
          })}
        </div>
      </div>
    </AppStateProvider>
  );
};

export default App;
