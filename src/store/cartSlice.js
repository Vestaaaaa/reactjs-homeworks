import { createSlice } from "@reduxjs/toolkit";
import cardPic from "../assets/cardPic.png";

const initialState = {
  items: [
    { id: 1, title: "Burger Dreams", price: 9.2, quantity: 1, image: cardPic },
    { id: 2, title: "Burger Dreams", price: 9.2, quantity: 1, image: cardPic },
    { id: 3, title: "Burger Dreams", price: 9.2, quantity: 1, image: cardPic },
  ],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    changeQuantity(state, action) {
      const { id, quantity } = action.payload;
      const item = state.items.find((i) => i.id === id);
      if (item && quantity > 0) {
        item.quantity = quantity;
      }
    },
    removeItem(state, action) {
      const id = action.payload;
      state.items = state.items.filter((item) => item.id !== id);
    },
    clearCart(state) {
      state.items = [];
    },
  },
});

export const { changeQuantity, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
