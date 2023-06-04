import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../cartItems";

// 買い物かごの初期化
const initialState = {
  cartItems: cartItems,
  amount: 4,
  total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      // state.cartItems = [];
      return { cartItems: [], amount: 0, total: 0 };
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      const newCartItems = state.cartItems.filter((item) => item.id !== itemId);
      return { ...state, cartItems: newCartItems };
    },
  },
});

export const { clearCart, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
