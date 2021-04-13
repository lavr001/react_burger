import React, {Component} from 'react';
import Modal from '../components/UI/Modal/Modal';

const with_error_handler = (WrappedComponent, axios) => {
  return class extends Component {
    state = {
      error: null
    }
    componentDidMount() {
      axios.interceptors.request.use(req => {
        this.setState({error: null});
        return req;
      })
      axios.interceptors.response.use(res => res, error_message => {
        this.setState({error: error_message})
      })
    }

    error_confirmed = () => {
      this.setState({error: null})
    }

    render() {
      return (
        <>
        {/*//There WILL BE message property on the error obj returned by Firebase*/}
          <Modal
            show={this.state.error}
            modal_closed={this.error_confirmed}>
            {this.state.error ? this.state.error.message : null}
          </Modal>
          <WrappedComponent {...this.props} />
        </>
      )
    }
  }
}

export default with_error_handler;
