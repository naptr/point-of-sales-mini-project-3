import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';


export const Card = ({ item }) => {

  useEffect(() => console.log(item), []);

  return (
    <div className="bg-blue-400">

    </div>
  );
}