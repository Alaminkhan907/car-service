import React from 'react'
import { Container, Nav, Navbar} from 'react-bootstrap'
import logo from '../../../images/logo.png';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';


const Header = () => {
  const [user] = useAuthState(auth);
  const handleSignOut = () => {
    signOut(auth);
  }
  return (
    <header className='sticky-top'>
      <>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand as={Link} to="/">
              <img src={logo} height={30} alt="" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="home#services">Services</Nav.Link>
                <Nav.Link href="home#experts">Experts</Nav.Link>

              </Nav>
              <Nav>
                <Nav.Link as={Link} to="about">About</Nav.Link>
                {
                  user && <>
                    <Nav.Link as={Link} to="addservice">Add Service</Nav.Link>
                    <Nav.Link as={Link} to="manage">Manage Service</Nav.Link>
                    <Nav.Link as={Link} to="orders">Orders</Nav.Link>
                  </>
                }
                {
                  user ?
                    <button className='btn btn-link text-white text-decoration-none' onClick={handleSignOut}>Sign Out</button>
                    :
                    <Nav.Link as={Link} to="/login">
                      Login
                    </Nav.Link>
                }
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    </header>
  )
}

export default Header