import React from 'react';
import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

function NewKegForm() {
    return (
        <div>
            <style jsx>{`
          div {
                margin: 50px;
               }


        `}</style>
            <form>
                <input
                    type='text'
                    id='name'
                    placeholder='Name' />
                <br></br>
                <br></br>
                <input
                    type='text'
                    id='brand'
                    placeholder='Brand' />
                <br></br>
                <br></br>
                <input
                    type='text'
                    id='price'
                    placeholder='Price' />
                <br></br>
                <br></br>
                <input
                    type='text'
                    id='alcoholContent'
                    placeholder='Alcohol Content' />
                <br></br>
                <br></br>
                <button type='submit'>Add Keg</button>
            </form>
        </div>
    );
}

export default NewKegForm;