import React, {useContext} from "react";
import MealItemForm from "./MealItemForm";
import CartContext from "../../../store/cart-context";

import classes from "./MealsItem.css";

const MealsItem = (props) => {
  const cartCtx = useContext(CartContext)
  const price = `${props.price.toFixed(2)}`;

  const addToCartHandler = amount => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price
    });
  }

  return (
    <li>
      <div className={classes.meal}>
        <div>
          <h3 className={classes.meal}>{props.name}</h3>
          <div className={classes.description}>{props.description}</div>
          <div className={classes.price}>{price}</div>
        </div>

        <div>
          <MealItemForm />
        </div>
      </div>
    </li>
  );
};

export default MealsItem;
