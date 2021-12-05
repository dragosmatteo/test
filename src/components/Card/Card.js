import React, { useContext } from "react";
import classes from "./Card.module.css";
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";

const Card = (props) => {
  const cartCtx = useContext(CartContext);
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;

  const cartItems = (
    <ul className={classes["card-items"]}>
      {" "}
      {cartCtx.items.map((item) => (
        <li>{item.name}</li>
      ))}{" "}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>

      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Card;
