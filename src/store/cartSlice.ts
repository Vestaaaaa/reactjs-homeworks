import { createSlice, PayloadAction } from "@reduxjs/toolkit";
const cardPic = new URL("../assets/cardPic.png", import.meta.url).href;

interface CartItem {
  id: number;
  title: string;
  price: number;
  quantity: number;
  image: string;
}

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
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
    changeQuantity(
      state,
      action: PayloadAction<{ id: number; quantity: number }>
    ) {
      const { id, quantity } = action.payload;
      const item = state.items.find((i) => i.id === id);
      if (item && quantity > 0) {
        item.quantity = quantity;
      }
    },
    removeItem(state, action: PayloadAction<number>) {
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
