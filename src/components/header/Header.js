import logo from '../../img/logo.png'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styles from './Header.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';


export const Header = () => {

    return (

        <Navbar variant="light" style={{background: '#E0DAB8'}}>
            <Container>
                <Navbar.Brand href="#home">
                    <img src={logo} className={styles.logo} alt="hero"/>
                </Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
            </Container>
        </Navbar>

    )
}