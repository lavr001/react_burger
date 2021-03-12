import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.module.scss';

const navigation_items = props => {
  return (
    <ul className={classes.NavigationItems}>
      <NavigationItem link='/' active='true'>Burger Builder</NavigationItem>
      <NavigationItem link='/' >Checkout</NavigationItem>
    </ul>
  )
}

export default navigation_items;
