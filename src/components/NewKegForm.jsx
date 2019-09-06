import React from 'react';

function NewKegForm() {
    return (
        <div>
            <form>
                <input
                    type='text'
                    id='name'
                    placeholder='Name' />
                <input
                    type='text'
                    id='brand'
                    placeholder='Brand' />
                <input
                    type='text'
                    id='price'
                    placeholder='Price' />
                <input
                    type='text'
                    id='alcoholContent'
                    placeholder='Alcohol Content' />
                <button type='submit'>Add Keg</button>
            </form>
        </div>
    );
}

export default NewKegForm;