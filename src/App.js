import React, { Fragment, useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Card from "./components/Card/Card";
import CardProvider from "./store/CardProvider";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCardHandler = () => {
    setCartIsShown(true);
  };

  const hideCardHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CardProvider>
      {cartIsShown && <Card onClose={hideCardHandler} />}
      <Header onShowCard={showCardHandler} />
      <main>
        <Meals />
      </main>
    </CardProvider>
  );
}

export default App;
