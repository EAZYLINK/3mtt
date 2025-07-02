import { Navbar, Nav, Container, Image } from 'react-bootstrap'
import { IoLogoFacebook } from "react-icons/io5";
import { FaInstagram, FaYoutube } from "react-icons/fa";
import OverlayFlag from './Popover';

function NavBar() {
    return (
        <Container className='nav-bar border-bottom' fluid>
        <Navbar expand="lg" className=' ' variant='dark'>  
            <Container>
                <Navbar.Brand href='#home'>
                    <Image 
                    src='asset/mv_bg.png'
                    style={{
                        width: '32px',
                        height: '32px',
                        margin: 'auto'
                    }}
                    />
                    CineMatch
                </Navbar.Brand>
                <Navbar.Toggle aria-controls='navbar-nav'/>
                <Navbar.Collapse id='navbar-nav' className='justify-content-end'>
                    <Nav>
                        <Nav.Link href='#movies' className='text-white'>Movie Picker</Nav.Link>
                        <OverlayFlag name = 'Top Genres' data = {['my genre1', 'my genre2']} />
                        <OverlayFlag name = 'Top Actors' data = {['my actor1', 'my actor2']} />
                        <Nav.Link href='#blog' className='text-white'>Blog</Nav.Link>
                        <Nav.Item className='d-flex flex-sm-row'>
                             <Nav.Link href='#blog' className='text-white me-sm-3'>
                            <IoLogoFacebook />
                            </Nav.Link>
                            <Nav.Link href='#blog' className='text-white me-sm-3'>
                                <FaInstagram />
                            </Nav.Link>
                            <Nav.Link href='#blog' className='text-white'>
                                <FaYoutube />
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </Container>
    )
}

export default NavBar;