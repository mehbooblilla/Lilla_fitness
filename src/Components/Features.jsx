import React from 'react'
import firstimage from '../Images/1.svg';
import secondimage from '../Images/4.svg';
import thirdtimage from '../Images/2.svg';
import FeatureBox from './FeatureBox';

function Feature() {
    return (
        <div id="features">
            <h1>Features</h1>
            <div className='a-container'>
                <FeatureBox image={secondimage} title="Cardio Exercise" />
                <FeatureBox image={firstimage} title="WeightLifting" />
                <FeatureBox image={thirdtimage} title="Specific Muscle" />
            </div>

        </div>
    )
}

export default Feature;