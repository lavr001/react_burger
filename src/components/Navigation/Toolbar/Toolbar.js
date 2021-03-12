import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './Toolbar.module.scss';

const toolbar = props => {
  return (
    <header className={classes.Toolbar}>
      <div>Menu</div>
      <div className={classes.Logo}>
        <Logo />
      </div>
      <nav><NavigationItems /></nav>
    </header>
  )
}

export default toolbar;
