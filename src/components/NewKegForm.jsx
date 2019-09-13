import React from 'react';
import PropTypes from 'prop-types';

function NewKegForm(props) {

  let _name = null;
  let _brand = null;
  let _price = null;
  let _alcoholContent = null;
  let _employeeName = null; //new code - add throughout
  let _dateEntered = null; //new code - add throughout

  function handleNewKegFormSubmission(event) {
    event.preventDefault();
    props.onNewKegCreation({ name: _name.value, brand: _brand.value, price: _price.value, alcoholContent: _alcoholContent.value });
    _name.value = '';
    _brand.value = '';
    _price.value = '';
    _alcoholContent.value = '';
    _employeeName.value = '';
    _dateEntered.value = '';
  }

  return (
    <div>
      <style jsx>{`
          div {
                margin: 50px;
               }


        `}</style>
      <form onSubmit={handleNewKegFormSubmission}>
        <input
          type='text'
          id='name'
          placeholder='Name'
          ref={(input) => { _name = input; }} />
        <br></br>
        <br></br>
        <input
          type='text'
          id='brand'
          placeholder='Brand'
          ref={(input) => { _brand = input; }} />
        <br></br>
        <br></br>
        <input
          type='text'
          id='price'
          placeholder='Price'
          ref={(input) => { _price = input; }} />
        <br></br>
        <br></br>
        <input
          type='text'
          id='alcoholContent'
          placeholder='Alcohol Content'
          ref={(input) => { _alcoholContent = input; }} />
        <br></br>
        <br></br>
        <input
          type='text'
          id='employeeName'
          placeholder='Listing Entered By'
          ref={(input) => { _employeeName = input; }} />
        <br></br>
        <br></br>
        <input
          type='text'
          id='dateEntered'
          placeholder='Date Entered'
          ref={(input) => { _dateEntered = input; }} />
        <br></br>
        <br></br>
        <button variant="primary" type='submit'>Add Keg</button>
      </form>
    </div>
  );
}

NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func
};

export default NewKegForm;