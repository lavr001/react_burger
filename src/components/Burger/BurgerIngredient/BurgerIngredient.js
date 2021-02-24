import React from 'react';
import PropTypes from 'prop-types';
import classes from './BurgerIngredient.module.scss';

const burger_ingredient = props => {
  const ingredientChoices = {
    'bread_bottom': <div className={classes.BreadBottom}></div>,
    'bread_top': (
      <div className={classes.BreadTop}>
        <div className={classes.Seeds1}></div>
        <div className={classes.Seeds2}></div>
      </div>
    ),
    'meat': <div className={classes.Meat}></div>,
    'cheese': <div className={classes.Cheese}></div>,
    'bacon': <div className={classes.Bacon}></div>,
    'salad': <div className={classes.Salad}></div>
  }
  return ingredientChoices[props.type];
}

burger_ingredient.propTypes = {
  type: PropTypes.string.isRequired
}

export default burger_ingredient;
