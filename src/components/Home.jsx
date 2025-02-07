import React from 'react';
import '../App.css';

function Home({onAccept}){
    return(
        <div>
            <div>
                <img/>
                <button className='accept-button' onClick={onAccept}>
                    Accept Reading
                </button>
            </div>
        </div>
    );
}

export default Home;