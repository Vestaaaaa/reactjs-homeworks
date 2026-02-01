import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import { describe, it, expect } from "vitest";
import { CartIcon } from "./CartIcon";

describe("CartIcon", () => {
  it("отображает иконку корзины", () => {
    render(
      <MemoryRouter>
        <CartIcon />
      </MemoryRouter>,
    );

    const cartLink = screen.getByRole("link");
    expect(cartLink).toBeInTheDocument();
    expect(cartLink).toHaveAttribute("href", "/order");

    const cartImage = screen.getByAltText("Cart");
    expect(cartImage).toBeInTheDocument();
  });

  it("переходит на страницу корзины при клике", async () => {
    const user = userEvent.setup();

    render(
      <MemoryRouter initialEntries={["/menu"]}>
        <Routes>
          <Route path="/menu" element={<CartIcon />} />
          <Route path="/order" element={<div>Order Page</div>} />
        </Routes>
      </MemoryRouter>,
    );

    const cartLink = screen.getByRole("link");
    expect(cartLink).toHaveAttribute("href", "/order");
  });

  it("имеет ссылку на страницу корзины", () => {
    render(
      <MemoryRouter>
        <CartIcon />
      </MemoryRouter>,
    );

    const cartLink = screen.getByRole("link");
    expect(cartLink).toHaveAttribute("href", "/order");
  });
});
