import React from 'react';
import classes from './Modal.module.scss';

const modal = props => {
  return (
    <div className={classes.Modal} data-modal={props.show}>
      {props.children}
    </div>
  )
}

export default modal;
