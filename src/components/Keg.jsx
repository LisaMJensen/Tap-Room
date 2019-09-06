import React from 'react';
import PropTypes from 'prop-types';

function Keg(props) {
    return (
        <div>
            <style jsx>{`
          div {
           margin: 20px;
           width: 250px;
           height: 160px;
           background-color: #e8eaed;
           text-align: center; 
          }
        `}</style>
            <h3>{props.name}</h3>
            <h3>{props.brand}</h3>
            <h3>{props.price}</h3>
            <h3>{props.alcoholContent}</h3>
            <hr />
        </div>
    );
}

Keg.propTypes = {
    name: PropTypes.string.isRequired,
    brand: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    alcoholContent: PropTypes.string.isRequired
};
export default Keg;