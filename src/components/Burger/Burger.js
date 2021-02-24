import React from 'react';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import classes from './Burger.module.scss';

const burger = props => {
  let final_ingredients = [];
  
  for (let key in props.ingredients) {
    for (let i = 0; i < props.ingredients[key]; i++) {
      final_ingredients.push(<BurgerIngredient key={key + i} type={key} />)
    }
  }

  return (
    <div className={classes.burger}>
      <BurgerIngredient type='bread_top' />
      {final_ingredients}
      <BurgerIngredient type='bread_bottom' />
    </div>
  )
}

export default burger;
