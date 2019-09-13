import React from 'react';
import Keg from './Keg';
import PropTypes from 'prop-types';

function KegList(props) {
  return (
    <div>
      <hr />
      {Object.keys(props.kegList).map(function (kegId) {
        var keg = props.kegList[kegId];
        return <Keg name={keg.name}
          brand={keg.brand}
          price={keg.price}
          alcoholContent={keg.alcoholContent}
          employeeName={keg.employeeName}
          dateEntered={keg.dateEntered}
          currentRouterPath={props.currentRouterPath}
          key={kegId}
          kegID={kegId}
          onKegSelection={props.onKegSelection} />;
      })}
    </div>
  );
}

KegList.propTypes = {
  kegList: PropTypes.objects,
  currentRouterPath: PropTypes.string,
  onKegSelection: PropTypes.func.isRequired
};

export default KegList;