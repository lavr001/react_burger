import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7
}

class BurgerBuilder extends Component {

  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    total_price: 4
  }

  add_ingredient = type => {
    const updated_count = this.state.ingredients[type] + 1;
    const updated_ingredients = {...this.state.ingredients};
    updated_ingredients[type] = updated_count;
    const new_price = this.state.total_price + INGREDIENT_PRICES[type];
    this.setState({ingredients: updated_ingredients, total_price: new_price});
  }

  remove_ingredient = type => {
    if (this.state.ingredients[type] > 0) {
      const updated_count = this.state.ingredients[type] - 1;
      const updated_ingredients = {...this.state.ingredients};
      updated_ingredients[type] = updated_count;
      const new_price = this.state.total_price - INGREDIENT_PRICES[type];
      this.setState({ingredients: updated_ingredients, total_price: new_price});
    }
  }

  render() {
    return (
      <>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          ingredient_added={this.add_ingredient}
          ingredient_removed={this.remove_ingredient}
          ingredients={this.state.ingredients}
          price={this.state.total_price}
        />
      </>
    );
  }
}

export default BurgerBuilder;
