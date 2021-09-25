import React from 'react';


const SupplierForm = () => {

  /* Handlers */
  const handleFormSubmit = event => {
    event.preventDefault();
    console.log('test')
  }

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <div id="labels">

        </div>
        <div id="inputs">
          <div id="inputs-wrapper">
            <input />
          </div>
          <div id="buttons">
            <button id="cancel" type="button">Cancel</button>
            <input type="submit" value="Save" />
          </div>
        </div>
      </form>
    </div>
  );
}

export default SupplierForm;