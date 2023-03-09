import React from "react";
import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const DataContext = createContext([]);

export default function Data({ children }) {
  const [data, setData] = useState([]);
  //   const [cart, setCart] = useState(
  //     JSON.parse(localStorage.getItem("cart")) || []
  //   );
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || {}
  );
  //   const [dishCount, setDishCount] = useState(0);
  const fetchData = () => {
    axios
      .get("https://www.mocky.io/v2/5dfccffc310000efc8d2c1ad")
      .then((res) => {
        setData(res.data);
        console.log(data);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const addItem = (id) => {
    const currentCount = cart[id] || 0;

    const cartTemp = {
      ...cart,
      [id]: currentCount + 1,
    };
    setCart(cartTemp);

    localStorage.setItem("cart", JSON.stringify(cartTemp));
  };
  const removeItem = (id) => {
    const currentCount = cart[id];
    if (currentCount) {
      const cartTemp = {
        ...cart,
        [id]: currentCount - 1,
      };
      setCart(cartTemp);
      localStorage.setItem("cart", JSON.stringify(cartTemp));
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <DataContext.Provider value={{ data, addItem, removeItem, cart }}>
      {children}
    </DataContext.Provider>
  );
}
