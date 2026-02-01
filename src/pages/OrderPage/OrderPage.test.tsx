import { screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi } from "vitest";
import { OrderPage } from "./OrderPage";
import { renderWithStore } from "../../tests/testUtils";

const mockAlert = vi.fn();
global.alert = mockAlert;

describe("OrderPage - корзина пользователя", () => {
  it("показывает пустую корзину", () => {
    renderWithStore(<OrderPage />, {
      preloadedState: {
        cart: { items: [] },
        auth: { isAuth: true, user: null },
      },
      route: "/order",
    });

    expect(screen.getByText(/finish your order/i)).toBeInTheDocument();
    expect(screen.getAllByRole("textbox")).toHaveLength(2);
  });

  it("отображает товары в корзине", () => {
    renderWithStore(<OrderPage />, {
      preloadedState: {
        cart: {
          items: [
            {
              id: 1,
              title: "Пицца",
              price: 10.99,
              quantity: 2,
              image: "pizza.jpg",
            },
            {
              id: 2,
              title: "Бургер",
              price: 8.5,
              quantity: 1,
              image: "burger.jpg",
            },
          ],
        },
        auth: { isAuth: true, user: null },
      },
      route: "/order",
    });

    expect(screen.getByText("Пицца")).toBeInTheDocument();
    expect(screen.getByText("Бургер")).toBeInTheDocument();
    expect(screen.getByDisplayValue("2")).toBeInTheDocument();
    expect(screen.getByDisplayValue("1")).toBeInTheDocument();
  });

  it("изменяет количество товара", async () => {
    const user = userEvent.setup();
    const { store } = renderWithStore(<OrderPage />, {
      preloadedState: {
        cart: {
          items: [
            {
              id: 1,
              title: "Пицца",
              price: 10.99,
              quantity: 2,
              image: "pizza.jpg",
            },
          ],
        },
        auth: { isAuth: true, user: null },
      },
      route: "/order",
    });

    const quantityInput = screen.getByDisplayValue("2");
    fireEvent.change(quantityInput, { target: { value: "5" } });

    const state = store.getState();
    expect(state.cart.items[0].quantity).toBe(5);
  });

  it("удаляет товар из корзины", async () => {
    const user = userEvent.setup();
    const { store } = renderWithStore(<OrderPage />, {
      preloadedState: {
        cart: {
          items: [
            {
              id: 1,
              title: "Пицца",
              price: 10.99,
              quantity: 2,
              image: "pizza.jpg",
            },
          ],
        },
        auth: { isAuth: true, user: null },
      },
      route: "/order",
    });

    const removeButton = screen.getByRole("button", { name: /x/i });
    await user.click(removeButton);

    const state = store.getState();
    expect(state.cart.items).toHaveLength(0);
  });

  it("очищает корзину при оформлении заказа", async () => {
    const user = userEvent.setup();
    const { store } = renderWithStore(<OrderPage />, {
      preloadedState: {
        cart: {
          items: [
            {
              id: 1,
              title: "Пицца",
              price: 10.99,
              quantity: 2,
              image: "pizza.jpg",
            },
          ],
        },
        auth: { isAuth: true, user: null },
      },
      route: "/order",
    });

    const streetInput = screen.getByRole("textbox", { name: /street/i });
    const houseInput = screen.getByRole("textbox", { name: /house/i });
    const submitButton = screen.getByRole("button", { name: /order/i });

    await user.type(streetInput, "Main Street");
    await user.type(houseInput, "10");
    await user.click(submitButton);

    expect(mockAlert).toHaveBeenCalledWith(
      "Order placed! Street: Main Street, house: 10",
    );

    const state = store.getState();
    expect(state.cart.items).toHaveLength(0);
  });
});
