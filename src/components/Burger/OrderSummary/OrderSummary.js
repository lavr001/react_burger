import React from 'react';
import Button from '../../UI/Button/Button';

const order_summary = props => {

  let ingredients_summary = [];
  for (let key in props.ingredients) {
    ingredients_summary.push(<li key={key}>
      <span style={{textTransform: 'capitalize'}}>{key}</span>: {props.ingredients[key]}
    </li>)
  }

  return (
    <>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>
        {ingredients_summary}
      </ul>
      <p><b>Total price:${props.price.toFixed(2)}</b></p>
      <p>Continue to Checkout</p>
      <Button btn_type='Danger' clicked={props.cancelled}>Cancel</Button>
      <Button btn_type='Success' clicked={props.continued}>Continue</Button>
    </>
  )
}

export default order_summary;
