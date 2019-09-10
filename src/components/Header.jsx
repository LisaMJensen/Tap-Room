import React from 'react';
import { Link } from 'react-router-dom';
import beerMug from '../assets/images/beerMug.png';

function Header() {
    return (
        <div>
            <style jsx>{`
            h1{
                color: royalblue;
                background-color: ;
                font-size: 40px;
            }
            `}</style>
            <img src={beerMug} alt="beer mug logo" />
            <h1>Tap Room</h1>
            <Link to="/">Home</Link> | <Link to="/newkeg">Create Keg</Link>
        </div>
    );
}

export default Header;