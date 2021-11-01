import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../Context/useAuth'
import logo from '../../../Images/logo.png'
import './Header.css'

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <>
            <Navbar sticky="top" className="bg-white my-3" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            src={logo}
                            width="280"
                            height="60"
                            className="d-inline-block align-top"
                            alt="Holiday Planners logo"
                        />
                    </Navbar.Brand >
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse className="justify-content-end nav-link" id="responsive-navbar-nav">
                        <Nav.Link as={Link} to="/home" className="text-color fw-bold header-front" >HOME</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#about" className="text-color fw-bold header-front" >ABOUT</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#about" className="text-color fw-bold header-front" >ABOUT</Nav.Link>
                        <Nav.Link as={Link} to="/clientDashboard" className="text-color fw-bold header-front" >CLIENT SIDE</Nav.Link>

                        <Nav.Link as={Link} to="/adminDashboard" className="text-color fw-bold header-front"> ADMIN SIDE </Nav.Link>

                        {user?.email || user?.name ?
                            <Button onClick={logOut} varient="light" className="btn btn-all text-white fw-bold"> LOGOUT</Button> : <Nav.Link as={Link} to="/clientLogin"><Button varient="light" className="btn btn-all text-white fw-bold"> Client Login</Button> </Nav.Link>
                        }
                        {(user?.email || user?.name) && <div>
                            <Navbar.Text>
                                <Link to="/profile" className="text-decoration-none fw-bold px-2">{user?.displayName}</Link>
                                <img className="user-img" src={user?.photoURL} alt="" />
                            </Navbar.Text>
                        </div>
                        }

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;