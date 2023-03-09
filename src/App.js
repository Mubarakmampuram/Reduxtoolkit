import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./App.css";
import Header from "./components/Header";
import MyTabs from "./components/MyTabs";
import { getDishes } from "./redux/cart";
//import { useEffect, useState } from "react";
//import Data from "./store/DataContext";

function App() {
  const dispatch = useDispatch();
  const dishes = useSelector((state) => state.cart.dishes);
  console.log(dishes);
  useEffect(() => {
    dispatch(getDishes());
  }, [dispatch]);

  return (
    <div className="App">
      <Header data={dishes} />
      <MyTabs data={dishes} />
    </div>
  );
}

export default App;
