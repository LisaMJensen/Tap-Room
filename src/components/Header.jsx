import React from 'react';
import { Link } from 'react-router-dom';
import beerMug from '../assets/images/beerMug.png';
import { Jumbotron } from 'reactstrap';
import { Breadcrumb } from 'reactstrap';

function Header() {
  return (
    <div>
      <style jsx>{`
            h1{
                color: royalblue;
               
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

            HeaderJumbo{
              background-color: blue;
            }
            `}</style>
      &nbsp;
        <Jumbotron bg="danger">
        <h1><img src={beerMug} alt="beer mug logo" />
          Tap Room</h1>
      </Jumbotron>
      <Breadcrumb>
        <p><Link to="/">Home</Link> | <Link to="/newkeg">Create Keg</Link></p>
      </Breadcrumb>

    </div>
  );
}

export default Header;