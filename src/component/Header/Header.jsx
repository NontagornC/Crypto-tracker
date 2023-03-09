import {Container,Nav,Navbar} from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Header.scss"
const Header =()=> {
    return (
        <Navbar expand="lg">
            <Container fluid>
                <Navbar.Brand className="logo_name" href="#">NTGCurrency.</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="#action1">Home</Nav.Link>
                        <Nav.Link href="#action2">Link</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header