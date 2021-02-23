import React from 'react';
import classes from './BurgerIngredient.module.scss';

const burger_ingredient = props => {
  let ingredient = null;

  // const ingredientChoices = {
  //   'bread-bottom': <div className={classes.BreadBottom}></div>,
  //   'bread-top': (
  //     <div className={classes.BreadTop}>
  //       <div className={classes.Seeds1}></div>
  //       <div className={classes.Seeds2}></div>
  //     </div>
  //   ),
  //   'meat': <div className={classes.Meat}></div>,
  //   'cheese': <div className={classes.Cheece}></div>,
  //   'bacon': <div className={classes.Bacon}></div>,
  //   'salad': <div className={classes.Salad}></div>
  // };

  // return ingredientChoices[props.type];

    switch (props.type) {
      case ('bread_bottom'):
        ingredient = <div className={classes.BreadBottom}></div>;
        break;
      case ('bread_top'):
        ingredient = (
          <div className={classes.BreadTop}>
            <div className={classes.Seeds1}></div>
            <div className={classes.Seeds2}></div>
          </div>
        )
        break;
      case ('meat'):
        ingredient = <div className={classes.Meat}></div>;
        break;
      case ('cheese'):
        ingredient = <div className={classes.Cheese}></div>;
        break;
      case ('salad'):
        ingredient = <div className={classes.Salad}></div>;
        break;
      case ('bacon'):
        ingredient = <div className={classes.Bacon}></div>;
        break;
        default:
          ingredient = null;
      }
      return ingredient;
}

export default burger_ingredient;
