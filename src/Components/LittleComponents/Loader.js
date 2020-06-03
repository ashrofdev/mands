import React from 'react';
import Fade from 'react-reveal/Fade'


const Loader = () => {
    return (
        <Fade right>
            <img alt="img" style={{width:'3rem'}} src={require('./1.gif')}/>
        </Fade>
    );
};

export default Loader;