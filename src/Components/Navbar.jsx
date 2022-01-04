import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-scroll';

function NavbarFunction() {
    const [nav, setnav]= useState(false);
    const changBackground=()=>{
        if(window.scrollY>=50){
            setnav(true);
        } 
         else{
            setnav(false);
        }
        
    }
    window.addEventListener('scroll', changBackground);
    return (
        <nav className={nav ? "nav active" : "nav"} >
             <Link color="white" className="logo" to="main">Lillah_Fitness.</Link>
             

                <ul class="menu">
                  <li>
                   <Link className="nav-link " to="main">HEADER</Link>
                  </li>
                  <li >
                   <Link className="nav-link" to="features">FEATURES</Link>
                  </li>
                  <li >
                    <Link class="nav-link" to="offer">OFFER</Link>
                  </li>
                  <li >
                  <Link class="nav-link" to="about">ABOUT</Link>
                  </li>
                  <li >
                  <Link class="nav-link" to="contact">CONTACT</Link>
                  </li>
                  <li >
                  <Link class="nav-link" to="signup">SignUp</Link>
                  </li>
                </ul>
             
           
        </nav>
    )
}

export default NavbarFunction;
