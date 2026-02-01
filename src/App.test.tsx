import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { configureStore } from "@reduxjs/toolkit";
import App from "./App";
import cartReducer from "./store/cartSlice";
import authReducer from "./store/authSlice";
import { describe, it, expect, vi } from "vitest";

vi.mock("./pages/OrderPage/OrderPage", () => ({
  OrderPage: () => <div>ORDER_PAGE</div>,
}));

vi.mock("./pages/MenuPage/MenuPage", () => ({
  MenuPage: () => <div>MENU_PAGE</div>,
}));

vi.mock("./pages/LoginPage/LoginPage", () => ({
  LoginPage: () => <div>LOGIN_PAGE</div>,
}));

vi.mock("./components/HomePage/Header/Header", () => ({
  Header: () => <div>HEADER</div>,
}));

vi.mock("./components/HomePage/Footer/Footer", () => ({
  Footer: () => <div>FOOTER</div>,
}));

const store = configureStore({
  reducer: {
    cart: cartReducer,
    auth: authReducer,
  },
});

describe("App - защищенный роутинг для OrderPage", () => {
  it("редиректит на логин если пользователь не авторизован", () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/order"]}>
          <App />
        </MemoryRouter>
      </Provider>,
    );

    expect(screen.getByText("LOGIN_PAGE")).toBeInTheDocument();
  });

  it("позволяет доступ к OrderPage если пользователь авторизован", () => {
    const authStore = configureStore({
      reducer: {
        cart: cartReducer,
        auth: authReducer,
      },
      preloadedState: {
        auth: { isAuth: true, user: { uid: "123", email: "test@test.com" } },
      },
    });

    render(
      <Provider store={authStore}>
        <MemoryRouter initialEntries={["/order"]}>
          <App />
        </MemoryRouter>
      </Provider>,
    );

    expect(screen.getByText("ORDER_PAGE")).toBeInTheDocument();
  });
});
