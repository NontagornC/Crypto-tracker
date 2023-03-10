import {Container,Nav,Navbar} from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";

const Header =()=> {
    const navigate = useNavigate()
    return (
        <Navbar  className="text-light bg-dark" collapseOnSelect expand="lg" bg="dark"  >
            <Container fluid>
                <Navbar.Brand   style={{ color: 'white' }} className="logo_name fs-1" href="#" onClick={()=>navigate(`/`)}>NTGCurrency.</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll"  style={{ color: 'white' }}/>
                <Navbar.Collapse id="navbarScroll" >
                    <Nav
                        className="me-auto my-2 my-lg-0 fs-3"
                        style={{ maxHeight: '100px'}}
                        navbarScroll
                    >
                        <Nav.Link style={{ color: 'white' }} href="#action1" onClick={()=>navigate(`/`)}>Home</Nav.Link>
                        <Nav.Link style={{ color: 'white' }} href="#action2" onClick={()=>navigate(`/detailpage`)}>Currency</Nav.Link>
                        <Nav.Link style={{ color: 'white' }} href="#action2" onClick={()=>navigate(`/exchange`)}>Exchange</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header