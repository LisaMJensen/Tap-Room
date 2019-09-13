import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardDeck, CardBody, CardTitle, CardSubtitle } from 'reactstrap';

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
          
           display: flex;
           justify-content: space-around; 
           
           padding: 20px;
          
          }


        `}</style>
      <CardDeck>
        <Card style={{ borderRadius: '25px', border: '2px solid black', justifyContent: 'space-around', padding: '20px' }}>
          <CardBody>
            <CardTitle style={{ color: 'royalBlue' }}><h2>{props.name}</h2></CardTitle>
            <CardSubtitle><h3>{props.brand}</h3></CardSubtitle>

            <h6>{props.price}</h6>
            <h6>{props.alcoholContent}</h6>
            {/* <h6>{props.employeeName}</h6>
        <h6>{props.dateEntered}</h6> */}
          </CardBody>
        </Card>
      </CardDeck>
    </div>;

  if (props.currentRouterPath === '/admin') {
    return (
      <div onClick={() => { props.onKegSelection(props.kegId); }} style={{}}>
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
  kegId: PropTypes.string.isRequired
};
export default Keg;