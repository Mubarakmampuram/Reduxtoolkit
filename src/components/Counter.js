import React from "react";
import "./Counter.css";
import { addItem, removeItem } from "../redux/cart";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

function Counter({ dish }) {
  const cartList = useSelector((state) => state.cart.cartList);
  const dispatch = useDispatch();

  return (
    <div>
      <div className="counter">
        <ul>
          <li>
            <button onClick={() => dispatch(removeItem(dish))}>-</button>
          </li>
          <li>{cartList[dish.dish_id] || 0}</li>
          <li>
            <button onClick={() => dispatch(addItem(dish))}>+</button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Counter;
