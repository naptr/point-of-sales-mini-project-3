import React from 'react';
import * as Spinner from 'react-spinners';


export const Loader = ({ type, color, css, size, height, width, radius, margin, speedMultiplier }) => {
  const LoaderComponent = Spinner[type];

  return (
    <>
      <LoaderComponent color={color} css={css} size={size} height={height} width={width} radius={radius} margin={margin} speedMultiplier={speedMultiplier} />
    </>
  );
}