import React from 'react';
import aboutimage from '../Images/total-shape-Drq07X98BqM-unsplash.jpg'
import qadirimg from '../Images/FB_IMG_1641186719511.jpg'
import mehboobimg from '../Images/IMG_3093.jpg'
function About() {
    return (
        <div id="about">
            <div className="about-image">
                <img src={aboutimage} alt="img" />
            </div>
            <div className="about-text">
                <h1>GROUP MEMBERS</h1>
                <span><p>Name : Muhammad Mehboob</p></span>
                <span><p>Registration No : 3758-FBAS/BSSE/F18</p></span>
                <span><img className='mehboobimage' src={mehboobimg} alt="mehboob" /></span>
                <span><p>Name : Abdul Qadir</p></span>
                <span><p>Registration No : 3867-FBAS/BSSE/F18</p></span>
                <span><img className='qadirimage' src={qadirimg} alt="mehboob" /></span>
                    
            </div>
            
        </div>
    )
}

export default About;
