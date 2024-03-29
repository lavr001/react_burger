import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';
import classes from './Toolbar.module.scss';

const toolbar = props => {
  return (
    <header className={classes.Toolbar}>
      <DrawerToggle clicked={props.toggle} />
      <div className={classes.Logo}>
        <Logo />
      </div>
      <nav><NavigationItems /></nav>
    </header>
  )
}

export default toolbar;
