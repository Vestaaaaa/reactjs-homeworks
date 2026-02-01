import { describe, it, expect, beforeEach } from "vitest";
import reducer, {
  addToCart,
  changeQuantity,
  removeItem,
  clearCart,
} from "./cartSlice";
import type { CartItem } from "../store/cartSlice";

const mockCartItem = (overrides?: Partial<CartItem>): CartItem => ({
  id: 1,
  title: "Test Product",
  price: 10,
  quantity: 1,
  image: "test.jpg",
  ...overrides,
});

describe("cartSlice", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  describe("addToCart", () => {
    it("добавляет новый товар в пустую корзину", () => {
      const item = mockCartItem();
      const state = reducer(undefined, addToCart(item));

      expect(state.items).toHaveLength(1);
      expect(state.items[0]).toEqual(item);
    });

    it("увеличивает количество при добавлении существующего товара", () => {
      const item = mockCartItem();
      const state1 = reducer(undefined, addToCart(item));
      const state2 = reducer(state1, addToCart({ ...item, quantity: 2 }));

      expect(state2.items).toHaveLength(1);
      expect(state2.items[0].quantity).toBe(3);
    });

    it("добавляет разные товары отдельно", () => {
      const item1 = mockCartItem({ id: 1 });
      const item2 = mockCartItem({ id: 2, title: "Другой товар" });

      const state1 = reducer(undefined, addToCart(item1));
      const state2 = reducer(state1, addToCart(item2));

      expect(state2.items).toHaveLength(2);
      expect(state2.items[0].id).toBe(1);
      expect(state2.items[1].id).toBe(2);
    });
  });

  describe("changeQuantity", () => {
    it("изменяет количество товара", () => {
      const item = mockCartItem();
      const state1 = reducer(undefined, addToCart(item));
      const state2 = reducer(state1, changeQuantity({ id: 1, quantity: 5 }));

      expect(state2.items[0].quantity).toBe(5);
    });

    it("удаляет товар при количестве 0", () => {
      const item = mockCartItem();
      const state1 = reducer(undefined, addToCart(item));
      const state2 = reducer(state1, changeQuantity({ id: 1, quantity: 0 }));

      expect(state2.items).toHaveLength(0);
    });

    it("не изменяет товар с несуществующим id", () => {
      const item = mockCartItem();
      const state1 = reducer(undefined, addToCart(item));
      const state2 = reducer(state1, changeQuantity({ id: 999, quantity: 5 }));

      expect(state2.items[0].quantity).toBe(1);
    });
  });

  describe("removeItem", () => {
    it("удаляет товар из корзины", () => {
      const item1 = mockCartItem({ id: 1 });
      const item2 = mockCartItem({ id: 2 });

      const state1 = reducer(undefined, addToCart(item1));
      const state2 = reducer(state1, addToCart(item2));
      const state3 = reducer(state2, removeItem(1));

      expect(state3.items).toHaveLength(1);
      expect(state3.items[0].id).toBe(2);
    });
  });

  describe("clearCart", () => {
    it("очищает всю корзину", () => {
      const item1 = mockCartItem({ id: 1 });
      const item2 = mockCartItem({ id: 2 });

      const state1 = reducer(undefined, addToCart(item1));
      const state2 = reducer(state1, addToCart(item2));
      const state3 = reducer(state2, clearCart());

      expect(state3.items).toHaveLength(0);
    });
  });
});
