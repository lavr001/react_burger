import React from 'react';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import classes from './Layout.module.scss';

const layout = props => (
  <>
    <Toolbar />
    <SideDrawer />
    <main className={classes.content}>
      {props.children}
    </main>
  </>
)

export default layout;
