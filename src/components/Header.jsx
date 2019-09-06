import React from 'react';
import { Link } from 'react-router-dom';

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
            <h1>Tap Room</h1>
            <Link to="/">Home</Link> | <Link to="/newkeg">Create Keg</Link>
        </div>
    );
}

export default Header;