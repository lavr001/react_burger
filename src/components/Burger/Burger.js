import React from 'react';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import classes from './Burger.module.scss';

const burger = props => {
  return (
    <div className={classes.burger}>
      <BurgerIngredient type='bread_top' />
      <BurgerIngredient type='cheese' />
      <BurgerIngredient type='meat' />
      <BurgerIngredient type='bread_bottom' />
    </div>
  )
}

export default burger;
