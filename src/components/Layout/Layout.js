import React, {Component} from 'react';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import classes from './Layout.module.scss';

class Layout extends Component {
  state = {
    show_side_drawer: false
  }

  side_drawer_close = () => this.setState({show_side_drawer: false});

  side_drawer_toggle = () => {
    this.setState( prev_state => {
      return {show_side_drawer: !prev_state.show_side_drawer};
    })
  }

  render() {
    return (
      <>
        <Toolbar toggle={this.side_drawer_toggle}/>
        <SideDrawer
          close={this.side_drawer_close}
          visible={this.state.show_side_drawer}
        />
        <main className={classes.content}>
          {this.props.children}
        </main>
      </>
    )
  }
}

export default Layout;
