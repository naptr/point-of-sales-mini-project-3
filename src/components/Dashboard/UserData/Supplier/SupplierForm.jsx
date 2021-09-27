import React, { useEffect } from 'react';


const SupplierForm = ({ closeForm, currentItemID }) => {

  /* Handlers */
  const handleFormSubmit = event => {
    event.preventDefault();
    console.log('test')
  }

  const handleCloseForm = () => {
    closeForm();
  }

  useEffect(() => console.log(currentItemID), []);

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
            <button id="cancel" type="button" onClick={handleCloseForm}>Cancel</button>
            <input type="submit" value="Save" />
          </div>
        </div>
      </form>
    </div>
  );
}

export default SupplierForm;