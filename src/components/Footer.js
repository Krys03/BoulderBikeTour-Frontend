import React from 'react';
import {Link} from  'react-router-dom' 
import { Navbar, Nav } from 'react-bootstrap';
import './Footer.css'; 


function Footer() {

    return (
        <>
     
     <footer class="bg-light text-center text-lg-start">
  
      <div class="text-center p-3">

      <img src={'/Boulderlogo.svg'}
       width="200"
       height="30"/>
  
      </div>
      </footer>

    </>
    
    )}

export default Footer
