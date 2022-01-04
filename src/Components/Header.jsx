import React,{useState} from 'react'
import { Link } from 'react-scroll';

function Header() {
    
    return (
        <div id="main">
            <div className="name">
                <h2>STEP UP YOUR</h2>
                <h1><span>FITNESS </span>WITH US</h1>
                <p className="details">Build your body and fitness with professional touch</p>
                <div className="header-btns">
                <Link class="nav-link pr-btn" to="signup">JOIN US</Link>
                    
                </div>
            </div>
        </div>
    )
}

export default Header;
