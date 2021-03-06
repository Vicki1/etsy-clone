import React from 'react';
import './nav.css';
import Hamburger from '../../imgs/hamburger';
import Cart from '../../imgs/cart.js';
export default function Nav (){
    return(
        <div className="navDiv">
            <div className="navDivRight">
                 <div className="etsyLogo">Etsy</div>
                 <div className="hamburger"><Hamburger/></div>
            </div>
            <div className="navDivLeft">
                <div className="sell topNavWord">Sell</div>
                <div className="signIn topNavWord">Sign in</div>
                <div className="cart"><Cart/></div>
            </div>
        </div>
    )
}