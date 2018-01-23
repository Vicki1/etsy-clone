import React from 'react';
import './nav.css';
import Hamburger from '../../imgs/hamburger';

export default function Nav (){
    return(
        <div className="navDiv">
            <div className="navDivRight">
                 <div className="etsyLogo">Etsy</div>
                 <div>Hambur</div>
            </div>
            <div className="navDivLeft">
                <div>Sell</div>
                <div>Sign in</div>
                <div>Cart</div>
            </div>
        </div>
    )
}