import React from 'react';
import classes from './Button.module.scss';

const button = props => {
  return (
    <button
      className={classes.Button}
      data-button={props.btn_type}
      onClick={props.clicked}
      >{props.children}
    </button>
  )
}

export default button;
