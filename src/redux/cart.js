import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const fetchData = async () => {
  try {
    const res = await axios.get(
      "https://www.mocky.io/v2/5dfccffc310000efc8d2c1ad"
    );
    const data = res.data;
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};
export const getDishes = createAsyncThunk("cart/getDishes", fetchData);

const INITIAL_STATE = {
  cartList: JSON.parse(localStorage.getItem("cart")) || {},
  cartCount: 0,
  dishes: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState: INITIAL_STATE,
  reducers: {
    addItem: (state, action) => {
      const prodId = action.payload.dish_id;

      const currentCount = state.cartList[prodId] || 0;

      const tempCart = state.cartList;

      state.cartList = {
        ...tempCart,
        [prodId]: currentCount + 1,
      };
      localStorage.setItem("cart", JSON.stringify(state.cartList));
    },
    removeItem: (state, action) => {
      const prodId = action.payload.dish_id;

      const currentCount = state.cartList[prodId] || 0;

      if (currentCount) {
        const tempCart = state.cartList;

        state.cartList = {
          ...tempCart,
          [prodId]: currentCount - 1,
        };
      }
      localStorage.setItem("cart", JSON.stringify(state.cartList));
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getDishes.pending, (state) => {
      console.log("loading");
    });
    builder.addCase(getDishes.fulfilled, (state, action) => {
      console.log("fetched  successfully");
      state.dishes = [...action.payload];
    });
    builder.addCase(getDishes.rejected, (state, action) => {
      console.log("rejected");
    });
  },
});

export const { addItem, removeItem } = cartSlice.actions;
