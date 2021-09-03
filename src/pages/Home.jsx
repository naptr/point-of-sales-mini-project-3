import React, { useEffect, useState } from 'react';


const Home = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(__SNOWPACK_ENV__);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setCount(count + 1), 1000);

    return () => clearTimeout(timer);
  }, [count, setCount]);
  
  return (
    <div>
      { count }
    </div>
  );
}

export default Home;