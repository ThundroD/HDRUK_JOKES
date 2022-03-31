import React, {Component} from "react";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container
  } from 'reactstrap';


  class AppNavBar extends Component {
    state = {
          isOpen: false
    }

    toggle = () => {
        this.setState({
        isOpen: !this.state.isOpen
        });
    }
    render(){
        return (
            <div>
                <Navbar color="primary" dark expand="sm" className="mb-5">
                    <Container>
                        <NavbarBrand heref="/">Jokes App</NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar> 
                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar>
            </div>
        );  
    }
};
  

export default AppNavBar;

