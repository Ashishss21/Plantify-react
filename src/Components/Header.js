import React, { Component } from 'react';
import { Collapse, Navbar, NavbarBrand, NavbarToggler, NavItem, Nav } from 'reactstrap';
import {NavLink} from 'react-router-dom';

class Header extends Component
{
    render()
    {
        return(
            <React.Fragment>
                <Navbar color="light blue" primary expand="md" fixed="top">
                    <div className="container">
                        <NavbarToggler />
                            <NavbarBrand className="mr-auto" href="/" color="#000">Plantify</NavbarBrand>
                            
                    </div>
                    <Collapse /*isOpen={this.state.isNavOpen}*/ navbar>
                        <Nav navbar>
                            <NavItem>
                                <NavLink className="nav-link" to="/home">
                                    Home
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/cart">
                                        Cart
                                    </NavLink>
                                </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/Menu">
                                    Menu
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/contactus">
                                    Contact US
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </React.Fragment>
        );
    }
}

export default Header;