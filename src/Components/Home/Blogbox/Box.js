import React from 'react';
import './box.css'
import { Link } from 'react-router-dom';

const Box = ({title, date, imageUrl}) => {
    return (
        <Link to={`/${title}`}>
            <div className="box">
                <div> <img className="img" src={require('../hero.jpg')}/></div>
                <div style={{padding:'1rem .2rem'}}>
                    <h3>{title}</h3>
                    <p>{date}</p>
                </div>
            </div>
        </Link>
    );
};

export default Box;