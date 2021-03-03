import React from 'react';
import BuildControl from './BuildControl/BuildControl';
import classes from './BuildControls.module.scss';

const controls = [
  {label: 'Salad', type: 'salad'},
  {label: 'Bacon', type: 'bacon'},
  {label: 'Cheese', type: 'cheese'},
  {label: 'Meat', type: 'meat'}
]

const build_controls = props => {
  return (
    <div className={classes.BuildControls}>
      <p>Current Price: <b>{props.price.toFixed(2)}</b></p>
      {controls.map(ctrl => (
        <BuildControl
          key={ctrl.label}
          label={ctrl.label}
          added={() => props.ingredient_added(ctrl.type)}
          removed={() => props.ingredient_removed(ctrl.type)}
          disabled={props.ingredients[ctrl.type] === 0 ? true : false}
        />
      ))}
      <button
        className={classes.OrderButton}
        disabled={props.price > 4 ? false : true}
        onClick={props.ordered}
        >ORDER NOW</button>
    </div>
  )
}

export default build_controls;
