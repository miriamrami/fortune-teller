import React, {useState, useEffect} from "react";
import {fetchAdvice} from '../api';
import { useNavigate } from "react-router-dom";
//**import css files later */

function Fortune({backHome}){
    const [advice, setAdvice] = useState('Click for a fortune~');
    
    const handleFortuneClick = async () => {
        const newAdvice = await fetchAdvice();
        setAdvice(newAdvice);
    };
    
    return (

        <div className="fortune-page">
            <title>Fortune Reading</title>
            <div className="magic-ball">
                <img alt="Magical Ball" className="magicball"/>
                <img alt="Cat Performing Reading" className="cat"/>
                <p className="fortune-text">{advice}</p>
            </div>
            <button className="fortune-button" onClick={handleFortuneClick}>
                See Your Fortune
            </button>
            <button className="back-button" onClick={backHome}>
                Back Home
            </button>
        </div>
    );
}
export default Fortune;