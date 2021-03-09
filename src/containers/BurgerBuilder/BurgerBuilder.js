import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

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
    total_price: 4,
    purchasing: false
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

  order_clicked = () => this.setState({purchasing: true});

  purchase_cancelled = () => this.setState({purchasing: false});

  purchase_continued = () => alert('You Continue!');

  render() {
    return (
      <>
        <Modal show={this.state.purchasing} modal_closed={this.purchase_cancelled} >
          <OrderSummary
            ingredients={this.state.ingredients}
            cancelled={this.purchase_cancelled}
            continued={this.purchase_continued}
            price={this.state.total_price}
          />
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          ingredient_added={this.add_ingredient}
          ingredient_removed={this.remove_ingredient}
          ingredients={this.state.ingredients}
          price={this.state.total_price}
          ordered={this.order_clicked}
        />
      </>
    );
  }
}

export default BurgerBuilder;
