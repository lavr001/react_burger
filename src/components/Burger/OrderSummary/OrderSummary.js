import React from 'react';

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
      <p>Continue to Checkout</p>
    </>
  )
}

export default order_summary;
