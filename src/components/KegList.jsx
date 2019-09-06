import React from 'react';
import Keg from './Keg';

var masterKegList = [
    {
        name: 'Kegmeister',
        brand: 'Kegatron',
        price: '$7',
        alcoholContent: 'A lot'
    },
   
];

function KegList() {
    return (
        <div>
            <hr />
            {masterKegList.map((keg, index) =>
                <Keg name={keg.name}
                    brand={keg.brand}
                    price={keg.price}
                    alcoholContent={keg.alcoholContent}
                    key={index} />
            )}
        </div>
    );
}

export default KegList;