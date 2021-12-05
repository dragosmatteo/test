import CartContext from "./cart-context";
import React, { useReducer } from "react";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if(action.type === 'ADD'){
      const updatedItems = state.item.concat(action.item);
      const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
      return {
          items: updatedItems,
          totalAmount: updatedTotalAmount
      }
  }
  
  return defaultCartState;
};

const CardProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCardHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };

  const removeItemToCardHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };

  const cardContext = {
    items: [],
    totalAmount: 0,
    addItem: addItemToCardHandler,
    removeItem: removeItemToCardHandler,
  };

  return <CartContext.Provider>{props.children}</CartContext.Provider>;
};

export default CardProvider;
