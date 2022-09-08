import React from 'react'
import firstimage from '../Images/1.svg';
import secondimage from '../Images/4.svg';
import thirdtimage from '../Images/2.svg';
import FeatureBox from './FeatureBox';

function Feature() {
    return (
        <div id="features">
            <h1>Features</h1>
            <div className="container">
                <div className="row" style={{ display: "flex" }}>
                    <div className="col-4" >
                        <div className='a-box featureCard'>

                            <div className='a-b-img'>
                                <img src={firstimage} alt="" />
                            </div>
                            <div className='a-b-text'>
                                <h2>lorem</h2>
                                <p>Lorem ipsum dolor sit amet.</p>
                            </div>


                        </div>
                    </div>
                    <div className="col-4 ">
                        <div className='a-box featureCard'>

                            <div className='a-b-img'>
                                <img src={secondimage} alt="" />
                            </div>
                            <div className='a-b-text'>
                                <h2>lorem</h2>
                                <p>Lorem ipsum dolor sit amet.</p>
                            </div>


                        </div>
                    </div>
                    <div className="col-4 ">
                        <div className='a-box featureCard'>

                            <div className='a-b-img'>
                                <img src={thirdtimage} alt="" />
                            </div>
                            <div className='a-b-text'>
                                <h2>lorem</h2>
                                <p>Lorem ipsum dolor sit amet.</p>
                            </div>


                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Feature;