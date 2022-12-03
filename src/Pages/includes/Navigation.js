import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom'
import './Navigation.css'


const Navigation = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark">
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
                        </ul>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default Navigation