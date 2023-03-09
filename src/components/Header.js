import React from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

import "./Header.css";

import BasicModal from "./Modal";
import { useSelector } from "react-redux";

function Header({ data }) {
  const cart = useSelector((state) => state.cart.cartList);

  if (!data) {
    return null;
  }
  return (
    <div className="header">
      <h1 className="name">{data[0]?.restaurant_name}</h1>
      <h3 className="order">
        My Orders
        <span className="icon">
          <AddShoppingCartIcon />
        </span>
        <span>
          {Object.values(cart).reduce((acc, cv) => {
            return (acc += cv);
          }, 0)}
        </span>
      </h3>
      <h3>
        <BasicModal />
      </h3>
    </div>
  );
}

export default Header;
