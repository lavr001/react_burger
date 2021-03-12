import React from 'react';
import classes from './DrawerToggle.module.scss';

const drawer_toggle = props => {
  return (
    <div className={classes.DrawerToggle} onClick={props.clicked}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}

export default drawer_toggle;
