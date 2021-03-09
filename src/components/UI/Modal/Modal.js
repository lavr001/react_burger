import React from 'react';
import Backdrop from '../Backdrop/Backdrop';
import classes from './Modal.module.scss';

const modal = props => {
  return (
    <>
      <Backdrop show={props.show} clicked={props.modal_closed} />
      <div className={classes.Modal} data-modal={props.show}>
        {props.children}
      </div>
    </>
  )
}

export default modal;
