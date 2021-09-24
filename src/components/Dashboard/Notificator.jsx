import React from 'react';


const Notificator = ({ closeForm, message, additional_classes }) => {

  const handleCloseForm = () => {
    closeForm()
  }

  return (
    <div className={`flex items-center flex-row justify-center h-10 px-2 space-x-4 bg-green-300 rounded ${additional_classes}`}>
      <p className="text-green-600 font-caption text-sm font-semibold">{ message }</p>
      <button onClick={handleCloseForm} className="h-full flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18">
          <path fill="none" d="M0 0h24v24H0z" />
          <path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z" fill="#059669" />
        </svg>
      </button>
    </div>
  );
}

export default Notificator;