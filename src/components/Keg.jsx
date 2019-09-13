import React from 'react';
import PropTypes from 'prop-types';

function Keg(props) {
  const kegInformation =
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
        <h4>{props.name}</h4>
        <h6>{props.brand}</h6>
        <h6>{props.price}</h6>
        <h6>{props.alcoholContent}</h6>
        <h6>{props.employeeName}</h6>
        <h6>{props.dateEntered}</h6>
      </span>
    </div>;

  if (props.currentRouterPath === '/admin') {
    return (
      <div onClick={() => { props.onKegSelection(props.kegId); }} style={{ backgroundColor: 'red', alignContent: 'center' }}>
        {kegInformation}
      </div>
    );
  } else {
    return (
      <div>
        {kegInformation}
      </div>
    );
  }
}

Keg.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  alcoholContent: PropTypes.string.isRequired,
  employeeName: PropTypes.string.isRequired,
  dateEntered: PropTypes.string.isRequired,
  currentRouterPath: PropTypes.string,
  onKegSelection: PropTypes.func,
  KegId: PropTypes.string.isRequired
};
export default Keg;