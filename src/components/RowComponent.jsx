import React from 'react';


const RowComponent = props => {
  const { children } = props;

  return (
    <div {...props}>
      {children}
    </div>
  );
}

export default RowComponent;