import React from 'react';


export const Line = ({ name, size, color }) => {
  switch (name) {
    case 'home':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size}>
          <path fill="none" d="M0 0h24v24H0z" />
          <path d="M19 21H5a1 1 0 0 1-1-1v-9H1l10.327-9.388a1 1 0 0 1 1.346 0L23 11h-3v9a1 1 0 0 1-1 1zM6 19h12V9.157l-6-5.454-6 5.454V19z" fill={color} />
        </svg>
      );
    case 'product_data':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size}>
          <path fill="none" d="M0 0h24v24H0z" />
          <path d="M3 10H2V4.003C2 3.449 2.455 3 2.992 3h18.016A.99.99 0 0 1 22 4.003V10h-1v10.001a.996.996 0 0 1-.993.999H3.993A.996.996 0 0 1 3 20.001V10zm16 0H5v9h14v-9zM4 5v3h16V5H4zm5 7h6v2H9v-2z" fill={color} />
        </svg>
      );
    case 'user_data':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size}>
          <path fill="none" d="M0 0h24v24H0z" />
          <path d="M12 14v2a6 6 0 0 0-6 6H4a8 8 0 0 1 8-8zm0-1c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6zm0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm2.595 7.812a3.51 3.51 0 0 1 0-1.623l-.992-.573 1-1.732.992.573A3.496 3.496 0 0 1 17 14.645V13.5h2v1.145c.532.158 1.012.44 1.405.812l.992-.573 1 1.732-.992.573a3.51 3.51 0 0 1 0 1.622l.992.573-1 1.732-.992-.573a3.496 3.496 0 0 1-1.405.812V22.5h-2v-1.145a3.496 3.496 0 0 1-1.405-.812l-.992.573-1-1.732.992-.572zM18 19.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" fill={color} />
        </svg>
      );
    case 'search':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size}>
          <path fill="none" d="M0 0h24v24H0z" />
          <path d="M11 2c4.968 0 9 4.032 9 9s-4.032 9-9 9-9-4.032-9-9 4.032-9 9-9zm0 16c3.867 0 7-3.133 7-7 0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7zm8.485.071l2.829 2.828-1.415 1.415-2.828-2.829 1.414-1.414z" fill={color} />
        </svg>
      );
    case 'transactions':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size}>
          <path fill="none" d="M0 0h24v24H0z" />
          <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-3-7H8v-2h1v-1a3.5 3.5 0 0 1 6.746-1.311l-1.986.496A1.499 1.499 0 0 0 11 10v1h3v2h-3v2h5v2H8v-2h1v-2z" fill={color} />
        </svg>
      );
    case 'reports':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size}>
          <path fill="none" d="M0 0h24v24H0z" />
          <path d="M9 2.003V2h10.998C20.55 2 21 2.455 21 2.992v18.016a.993.993 0 0 1-.993.992H3.993A1 1 0 0 1 3 20.993V8l6-5.997zM5.83 8H9V4.83L5.83 8zM11 4v5a1 1 0 0 1-1 1H5v10h14V4h-8z" fill={color} />
        </svg>
      );
    default:
      throw new Error('Error boy');
  }
}

export const Fill = ({ name, size, color}) => {
  switch (name) {
    case 'home':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size}>
          <path fill="none" d="M0 0h24v24H0z" />
          <path d="M20 20a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-9H1l10.327-9.388a1 1 0 0 1 1.346 0L23 11h-3v9z" fill={color} />
        </svg>
      );
    case 'product_data':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size}>
          <path fill="none" d="M0 0h24v24H0z" />
          <path d="M3 10h18v10.004c0 .55-.445.996-.993.996H3.993A.994.994 0 0 1 3 20.004V10zm6 2v2h6v-2H9zM2 4c0-.552.455-1 .992-1h18.016c.548 0 .992.444.992 1v4H2V4z" fill={color} />
        </svg>
      );
    case 'user_data':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size}>
          <path fill="none" d="M0 0h24v24H0z" />
          <path d="M12 14v8H4a8 8 0 0 1 8-8zm0-1c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6zm2.595 5.812a3.51 3.51 0 0 1 0-1.623l-.992-.573 1-1.732.992.573A3.496 3.496 0 0 1 17 14.645V13.5h2v1.145c.532.158 1.012.44 1.405.812l.992-.573 1 1.732-.992.573a3.51 3.51 0 0 1 0 1.622l.992.573-1 1.732-.992-.573a3.496 3.496 0 0 1-1.405.812V22.5h-2v-1.145a3.496 3.496 0 0 1-1.405-.812l-.992.573-1-1.732.992-.572zM18 17a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" fill={color} />
        </svg>
      );
    case 'search':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size}>
          <path fill="none" d="M0 0h24v24H0z" />
          <path d="M11 2c4.968 0 9 4.032 9 9s-4.032 9-9 9-9-4.032-9-9 4.032-9 9-9zm8.485 16.071l2.829 2.828-1.415 1.415-2.828-2.829 1.414-1.414z" fill={color} />
        </svg>
      );
    case 'transactions':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size}>
          <path fill="none" d="M0 0h24v24H0z" />
          <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-3-9v2H8v2h8v-2h-5v-2h3v-2h-3v-1a1.5 1.5 0 0 1 2.76-.815l1.986-.496A3.501 3.501 0 0 0 9 10v1H8v2h1z" fill={color} />
        </svg>
      )
    case 'reports':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size}>
          <path fill="none" d="M0 0h24v24H0z" />
          <path d="M3 8l6.003-6h10.995C20.55 2 21 2.455 21 2.992v18.016a.993.993 0 0 1-.993.992H3.993A1 1 0 0 1 3 20.993V8zm7-4.5L4.5 9H10V3.5z" fill={color} />
        </svg>
      );
    default:
      throw new Error('Error boy');
  }
}

export const ArrowRight = ({ size, color, active }) => {
  return (
    <>
      {
        active ? <svg className={`transform ${active && `rotate-180`} transition-transform duration-300`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size}><path fill="none" d="M0 0h24v24H0z" /><path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z" fill={color} /></svg> : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} className={`transform ${active && `rotate-180`} transition-transform duration-300`}><path fill="none" d="M0 0h24v24H0z" /><path d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z" fill={color} /></svg>
      }
    </>
  );
}