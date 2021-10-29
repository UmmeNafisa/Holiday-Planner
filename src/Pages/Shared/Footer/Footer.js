import React from 'react';
import footerImg from '../../../Images/footer-back.jpg'

const Footer = () => {
    return (
        <div style={{ backgroundImage: `url(${footerImg})` }} className="py-5 mt-3" >
            <h1> This is holiday planners</h1>
        </div>
    );
};

export default Footer;