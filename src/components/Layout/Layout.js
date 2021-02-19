import React from 'react';
import classes from './Layout.module.scss';

const layout = props => (
  <>
    <div>Toolbar, SideMenu, Backdrop</div>
    <main className={classes.content}>
      {props.children}
    </main>
  </>
)

export default layout;
