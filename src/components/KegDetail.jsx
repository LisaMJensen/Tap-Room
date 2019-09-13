import React from 'react';
import PropTypes from 'prop-types';

function KegDetail(props) {
    return (
        <div>
            <h1>{props.selectedKeg.name}</h1>
            <h2>{props.selectedKeg.brand}</h2>
            <h2>{props.selectedKeg.price}</h2>
            <h2>{props.selectedKeg.alcoholContent}</h2>
            <h2>{props.selectedKeg.employeeName}</h2>
            <h2>{props.selectedKeg.dateEntered}</h2>
        </div>
    );
}

KegDetail.propTypes = {
    selectedKeg: PropTypes.object
};

export default KegDetail;