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
                margin: 10px
            }

            img{
                height: 50px;
                width: auto;
            }

            p{
                margin: 30px;
            }
            `}</style>
            &nbsp;
            <h1><img src={beerMug} alt="beer mug logo" />
            Tap Room</h1>
            <p><Link to="/">Home</Link> | <Link to="/newkeg">Create Keg</Link></p>
        </div>
    );
}

export default Header;