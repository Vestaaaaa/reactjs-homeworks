import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CartItem {
  id: number;
  title: string;
  price: number;
  quantity: number;
  image: string;
}

export interface CartState {
  items: CartItem[];
}

const loadCartFromStorage = (): CartState => {
  if (typeof window === "undefined") {
    return { items: [] };
  }

  try {
    const saved = localStorage.getItem("cart");
    if (saved) {
      return JSON.parse(saved);
    }
  } catch (error) {
    console.error("Failed to load cart from localStorage:", error);
  }
  return { items: [] };
};

const saveCartToStorage = (state: CartState) => {
  if (typeof window === "undefined") return;

  try {
    localStorage.setItem("cart", JSON.stringify(state));
  } catch (error) {
    console.error("Failed to save cart to localStorage:", error);
  }
};

const initialState: CartState = loadCartFromStorage();

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<CartItem>) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);

      if (existingItem) {
        existingItem.quantity += newItem.quantity;
      } else {
        state.items.push(newItem);
      }

      saveCartToStorage(state);
    },

    changeQuantity(
      state,
      action: PayloadAction<{ id: number; quantity: number }>,
    ) {
      const { id, quantity } = action.payload;
      const item = state.items.find((i) => i.id === id);
      if (item && quantity > 0) {
        item.quantity = quantity;
      } else if (item && quantity === 0) {
        state.items = state.items.filter((item) => item.id !== id);
      }
      saveCartToStorage(state);
    },

    removeItem(state, action: PayloadAction<number>) {
      const id = action.payload;
      state.items = state.items.filter((item) => item.id !== id);
      saveCartToStorage(state);
    },

    clearCart(state) {
      state.items = [];
      saveCartToStorage(state);
    },
  },
});

export const { addToCart, changeQuantity, removeItem, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
