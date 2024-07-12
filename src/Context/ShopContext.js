import React, { createContext, useState, useEffect } from 'react';
import { BASE_URL } from '../Utils/constant';

// Create the context
export const ShopContext = createContext(null);

// Create a provider component
export const ShopProvider = (props) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(BASE_URL + "/products");
      const result = await response.json();
      setData(result);
    };

    fetchData();
  }, []);

  return (
    <ShopContext.Provider value={data}>
      {props.children}
    </ShopContext.Provider>
  );
};
