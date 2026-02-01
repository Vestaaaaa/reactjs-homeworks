import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { MemoryRouter } from "react-router-dom";
import { MenuPage } from "./MenuPage";
import cartReducer from "../../store/cartSlice";
import authReducer from "../../store/authSlice";

describe("MenuPage", () => {
  beforeEach(() => {
    global.fetch = vi.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve([]),
      }),
    ) as any;
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  const store = configureStore({
    reducer: {
      cart: cartReducer,
      auth: authReducer,
    },
  });

  it("отображает заголовок меню", async () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <MenuPage />
        </MemoryRouter>
      </Provider>,
    );

    expect(screen.getByText(/browse your menu/i)).toBeInTheDocument();
  });

  it("вызывает fetch при монтировании", async () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <MenuPage />
        </MemoryRouter>
      </Provider>,
    );

    await waitFor(() => {
      expect(global.fetch).toHaveBeenCalledTimes(1);
    });
  });
});
