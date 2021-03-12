import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';
import classes from './SideDrawer.module.scss';

const side_drawer = props => {
  return (
    <>
      <Backdrop show={props.visible} clicked={props.close}/>
      <div className={classes.SideDrawer} data-show={props.visible}>
        <div className={classes.Logo}>
          <Logo />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </>
  )
}

export default side_drawer;
