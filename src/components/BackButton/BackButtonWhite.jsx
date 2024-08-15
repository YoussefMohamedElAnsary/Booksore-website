import React from 'react';
import './backButtonWhite.css';
import backbutton from "../../components/assets/ArrowCircleRight.svg"

const BackButton = () => {
    return (
        <div className="BackButtonWhite">
            <button type='submit' className="back_white">Back
            <img className="arrow" src={backbutton}/></button>
                
        </div>
    )
}
export default BackButton