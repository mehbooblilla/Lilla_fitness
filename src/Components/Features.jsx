import React from 'react'
import firstimage from '../Images/1.svg';
import secondimage from '../Images/4.svg';
import thirdtimage from '../Images/2.svg';


function  Feature() {
    return (
        <div id="features">
             <h1>Features</h1>
            <div className="a-container">
                <div className="row">
                    <div className="col-sm-3  a-box">
                        <div className="a-b-img">
                        <img src={secondimage} alt="Cardio" />
                        </div>
                        <div className="a-b-text">
                            <h2>Cardio Exercise</h2>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

                        </div>
                   
                    </div>
                    <div className="col-sm-3  a-box">
                    <div className="a-b-img">
                            <img src={firstimage} alt="Weightlisting" />
                        </div>
                        <div className="a-b-text">
                         <h2>WeightLifting</h2>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

                        </div>
                   
                    </div>
                    <div className="col-sm-3   a-box">
                     <div className="a-b-img">
                           <img src={thirdtimage} alt="pic2" />
                        </div>
                        <div className="a-b-text">
                         <h2>Specific Muscle</h2>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

                        </div>
                    
                    </div>
                    
                       
                </div>
            </div>
        </div>
    )
}

export default  Feature;
