import { useState , useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import facebook from "../Imges/icons8-facebook.svg";
import instagram from "../Imges/icons8-instagram.svg";
import linkedin from "../Imges/icons8-linkedin.svg";
import headLogo from "../Imges/icons8-anubis-97.png";
import { HashLink } from 'react-router-hash-link';

function Header() {
  const [activeLink, setActiveLink] = useState ("Home");
  const [scrolled, setScorlled] = useState (false);
    useEffect(() =>{
      const onScroll =()=>{
        if(window.scrollY > 50) {
          setScorlled(true)
         }
        else{
          setScorlled(false)
        }
      };  
      window.addEventListener("scroll" , onScroll);
      return ()=> window.removeEventListener("scroll" , onScroll)
    
    },[]);

    const onUpdateActiveLink =(value)=> {
      setActiveLink(value);
    }

    
  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand className='head-logo' href="#"><img src={headLogo} maxWidth="100" maxHeight="75" alt="logo"/> ANUBIS</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className='headr-Toggle' />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto ">
            <HashLink  className={ activeLink ==="Home" ? "active navbar-link" : "navbar-link"} onClick={()=> onUpdateActiveLink("Home")} to="#home">Home</HashLink>
            <HashLink  className={ activeLink ==="Skills" ? "active navbar-link" : "navbar-link"} onClick={()=> onUpdateActiveLink("Skills")} to="#Skills">Skills</HashLink>
            <HashLink  className={ activeLink ==="Projects" ? "active navbar-link" : "navbar-link"} onClick={()=> onUpdateActiveLink("Projects")} to="#projects">projects</HashLink>
            <div className="d-flex  head-icons">
            <a href='https://www.linkedin.com/in/hussein-pop-088625213'  target='_blank'className='head-icon'><img src={linkedin} alt="logo" className='head-i'/></a>
            <a href='https://www.facebook.com/hussein.qaid.33?mibextid=ZbWKwL' target='_blank' className='head-icon'><img src={facebook} alt="logo" className='head-i'/></a>
            <a href='https://instagram.com/hussein.qaid.33?igshid=MzRlODBiNWFlZA==' target='_blank' className='head-icon'><img src={instagram} alt="logo" className='head-i'/></a>
            </div>
            <HashLink className='hash-but' to="#contact"><button className='head-but'>Let's connect</button></HashLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;