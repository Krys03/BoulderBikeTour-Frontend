import React ,{ Component }  from 'react'
import { Navbar, Nav } from 'react-bootstrap';
import './Navigationbar.css';



class Navigationbar extends Component {

 
  
  render() {
    return (

      
<Navbar collapseOnSelect expand="lg"  sticky="top" className="navb">
<Navbar.Brand href="#home"><img
        alt=""
        src={'/Boulderlogo.svg'}
        width="300"
        height="30"
        className="d-inline-block align-top "
      />{' '}
   </Navbar.Brand>

  <Navbar.Toggle aria-controls="responsive-navbar-nav" id="toggle1" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="d-flex ml-5">
    <Nav.Item>
      <Nav.Link className="pr-5" href="/Home">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
      <Nav.Link className="pr-5" href="/Location">Location</Nav.Link>
      </Nav.Item>
      <Nav.Item>
      <Nav.Link className="pr-5 " href="/Athletes">Athletes</Nav.Link>
      </Nav.Item>
      <Nav.Item>
      <Nav.Link className="pr-5" href="/Gallery">Gallery</Nav.Link>
      </Nav.Item>
      <Nav.Item>
      <Nav.Link className="pr-5" href="/Contest">Contest</Nav.Link>
      </Nav.Item>
    </Nav>
    
  </Navbar.Collapse>
</Navbar>



    );

  }    
}

export default Navigationbar;