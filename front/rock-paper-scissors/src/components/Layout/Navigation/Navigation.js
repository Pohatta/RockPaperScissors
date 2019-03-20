import React, {Fragment} from 'react';
import { NavLink} from 'react-router-dom';

import {Collapse, Navbar,  NavbarToggler,  NavbarBrand,  Nav,  NavItem, UncontrolledDropdown,  DropdownToggle,  DropdownMenu,  Container } from 'reactstrap';
import Logo from '../Logo/Logo'

class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.close = this.close.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  close() {
    this.setState({
      isOpen: false
    });
  }


  render() {

    let navigation = (
      <Fragment>
        <Nav className="mr-auto" navbar>
          <NavItem>
            <NavLink to="/" className="nav-link" onClick={this.close}>Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/setup" className="nav-link" onClick={this.close}>Setup</NavLink>
          </NavItem>
        </Nav>
      </Fragment>
    );

    return (
      <div>
        <Navbar expand="md" dark color="dark" className="navbar fixed-top">
          <Container>
            <NavbarBrand href="/">
              <Logo/>
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              {navigation}
            </Collapse>
            </Container>
        </Navbar>
      </div>
    );
  }
}

export default Navigation;