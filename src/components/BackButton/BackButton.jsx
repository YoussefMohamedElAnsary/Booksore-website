import React from 'react';
import './backButton.css';
import backbutton from "../../components/assets/ArrowCircleRight.png"

const BackButton = () => {
    return (
        <div className="BackButton">
            <button type='submit' className="back">Back
            <img className="arrow" src={backbutton}/></button>
                
        </div>
    )
}
export default BackButton