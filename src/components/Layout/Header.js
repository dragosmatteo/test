import { Fragment } from "react";

import classes from "./Header.module.css";
import MealsImage from '../../assets/meals.jpg'
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={props.onShowCard}/>
      </header>
      <div className={classes['main-image']}>
        <img src={MealsImage} alt="A table full of delicios food"/>
      </div>
    </Fragment>
  );
};

export default Header;
