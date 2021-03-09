import React from 'react';
import Logo from '../../Logo/Logo';
import classes from './Toolbar.module.scss';

const toolbar = props => {
  return (
    <header className={classes.Toolbar}>
      <div>Menu</div>
      <Logo />
      <nav>some nav links</nav>
    </header>
  )
}

export default toolbar;
