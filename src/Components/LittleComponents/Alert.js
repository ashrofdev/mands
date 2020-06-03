import React from 'react';
import Fade from "react-reveal/Fade"

const Alert = ({type, message, removeAlert}) => {
    return (
        <div>
                {
                    type === 'success'?
                    <div className="success alert">
                    {message} 
                    <button onClick={removeAlert}>𝗫</button>
                    </div>:
                    type === 'warning'?
                    <div className="warning alert">
                    {message} 
                    <button onClick={removeAlert}>𝗫</button>
                    </div>:
                    type === 'error'?
                    <div className="error alert">
                    {message} 
                    <button onClick={removeAlert}>𝗫</button>
                    </div>:null
                }
        </div>
    );
};

export default Alert;