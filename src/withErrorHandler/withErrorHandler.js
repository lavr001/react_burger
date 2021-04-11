import React from 'react';
import Modal from '../components/UI/Modal/Modal';

const with_error_handler = WrappedComponent => {
  return props => {
    return (
      <>
        <Modal show>
          Something didn't work!
        </Modal>
        <WrappedComponent {...props} />
      </>
    )
  }
}

export default with_error_handler;
