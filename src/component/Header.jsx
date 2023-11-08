import React from 'react';
import headerImg from '../assets/investment-calculator-logo.png'

const Header = () => {
    return (
        <div id='header'>
            <img src={headerImg} alt="inverstment calculator"/>
            <h1>Investment Calculator</h1>
        </div>
    );
};

export default Header;