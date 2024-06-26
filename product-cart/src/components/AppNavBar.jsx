import React from 'react';
import Helper from "../utility/Helper.js";
import {Container, Nav, Navbar} from "react-bootstrap";
import {Link, NavLink} from "react-router-dom";
import logo from "../assets/images/logo.svg"

const AppNavBar = () => {
    const logout = ()=> {
        sessionStorage.clear();
        window.location.href = "/";
    }
    return (
        <Navbar expand="lg" className="bg-body-tertiary bg-white shadow">
            <Container>
                <Navbar.Brand href="#">
                    <img alt="" className="nav-logo" src={logo}/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll>
                        <NavLink className="nav-link" to="/">Home</NavLink>
                        {
                            Helper.isLogin() &&
                            <NavLink className="nav-link" to="/cart-list">Cart List</NavLink>
                        }
                    </Nav>
                    {
                        Helper.isLogin() ? (
                            <button onClick={logout} className='btn btn-danger'>Logout</button>) :
                            ( <Link className='btn btn-danger' to="/user-login">Login</Link> )
                    }

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default AppNavBar;