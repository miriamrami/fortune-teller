import React, {useState} from "react";
import {fetchAdvice} from '../api';
//**import css files later */

function Fortune(){
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
        </div>
    );
}
export default Fortune;