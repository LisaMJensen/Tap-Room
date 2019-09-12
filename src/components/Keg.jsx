import React from 'react';
import PropTypes from 'prop-types';

function Keg(props) {
  return (
    <div>
      <style jsx>{`
          div {
           margin: 20px;
           margin-top: 20px;
           margin-buttom: 20px;
           width: 250px;
           height: 160px;
           background-color: #e8eaed;
           display: flex;
           justify-content: space-around; 
           border: 2px solid black;
           padding: 20px;
           border-radius: 25px;
          }


        `}</style>
      <span>
        <h2>{props.name}</h2>
        <h3>{props.brand}</h3>
        <h3>{props.price}</h3>
        <h3>{props.alcoholContent}</h3>
      </span>
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