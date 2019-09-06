import React from 'react';
import Keg from './Keg';

var masterKegList = [
    {
        name: 'Kegmeister',
        brand: 'Kegatron',
        price: '$7',
        alcoholContent: 'A lot'
    },
    // {
    //     names: 'Sleater and Kinney',
    //     location: '4B',
    //     issue: 'Fox image not displaying on page, can only see duck?'
    // },
    // {
    //     names: 'Imani & Jacob',
    //     location: '9F',
    //     issue: 'Donkey picture not displaying on hover in Zoology app. :('
    // }
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