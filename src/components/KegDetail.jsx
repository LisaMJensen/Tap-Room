import React from 'react';
import PropTypes from 'prop-types';

function KegDetail(props) {
    return (
        <div>
            <h1>{props.selectedKeg.name}</h1>
            <h4>Brand Name:{props.selectedKeg.brand}</h4>
            <h4>Price:{props.selectedKeg.price}</h4>
            <h4>Alcohol Content:{props.selectedKeg.alcoholContent}</h4>
            <h4>Entered by Employee:{props.selectedKeg.employeeName}</h4>
            <h4>Date Entered:{props.selectedKeg.dateEntered}</h4>

        </div>
    );
}

KegDetail.propTypes = {
    selectedKeg: PropTypes.object
};

export default KegDetail;