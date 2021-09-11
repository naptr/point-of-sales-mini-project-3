import React from 'react';
import * as Spinner from 'react-spinners';


export const Loader = ({ loader,color, css, size, height, width, radius, margin }) => {
  const LoaderComponent = Spinner[loader];

  return (
    <>
      <LoaderComponent color={color} css={css} size={size} height={height} width={width} radius={radius} margin={margin} />
    </>
  );
}