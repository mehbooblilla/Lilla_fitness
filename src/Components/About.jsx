import React from 'react';
import aboutimage from '../Images/total-shape-Drq07X98BqM-unsplash.jpg'

function About() {
    return (
        <>
            <div id="about">
                <div className="about-image">
                    <img src={aboutimage} alt="" />
                </div>
                <div className="about-text">
                    <h1>LEARN MORE ABOUT US</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam quis enim sit,
                        nam, ea perferendis laborum fugit incidunt obcaecati adipisci saepe sunt, magni dolore assumenda!</p>
                </div>
            </div>
        </>
    )
}

export default About;
