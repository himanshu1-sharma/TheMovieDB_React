import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom'
import './Navigation.css'


const Navigation = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <NavLink exact activeClassName="active" to='/'>
                                <li>Home</li>
                            </NavLink>
                            <NavLink exact activeClassName="active" to='/popular'>
                                <li>Popular</li>
                            </NavLink>
                            <NavLink exact activeClassName="active" to='/top-rated'>
                                <li>Top Rated</li>
                            </NavLink>
                            <NavLink exact activeClassName="active" to='/upcoming'>
                                <li>Upcoming</li>
                            </NavLink>
                            <NavLink exact activeClassName="active" to='/users'>
                                <li>Users</li>
                            </NavLink>
                        </Nav>
                    </Navbar.Collapse>

                </Container>
            </Navbar>
            {/* <Navbar bg="dark" variant="dark">
                <Container>
                    <Nav className="me-auto">
                        <ul>
                            <NavLink exact activeClassName="active" to='/'>
                                <li>Home</li>
                            </NavLink>
                            <NavLink exact activeClassName="active" to='/popular'>
                                <li>Popular</li>
                            </NavLink>
                            <NavLink exact activeClassName="active" to='/top-rated'>
                                <li>Top Rated</li>
                            </NavLink>
                            <NavLink exact activeClassName="active" to='/upcoming'>
                                <li>Upcoming</li>
                            </NavLink>
                            <NavLink exact activeClassName="active" to='/users'>
                                <li>Users</li>
                            </NavLink>
                        </ul>
                    </Nav>
                </Container>
            </Navbar> */}
        </>
    )
}

export default Navigation