import React from 'react';
import Keg from './Keg';
import PropTypes from 'prop-types';

function KegList(props) {
  return (
    <div>
      <hr />
      {Objects.keys(props.kegList).map(function (kegId) {
        var keg = props.kegList[kegId];
        return <Keg name={keg.name}
          brand={keg.brand}
          price={keg.price}
          alcoholContent={keg.alcoholContent}
          currentRouterPath={props.currentRouterPath}
          key={kegId}
          kegID={kegId}
          onKegSelection={props.onKegSelection} />;
      })}
    </div>
  );
}

KegList.propTypes = {
  KegList: PropTypes.objects,
  currentRouterPath: PropTypes.string,
  onKegSelection: PropTypes.function
};

export default KegList;