import React from "react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { render, type RenderOptions } from "@testing-library/react";
import cartReducer from "../store/cartSlice";
import authReducer from "../store/authSlice";

const rootReducer = combineReducers({
  cart: cartReducer,
  auth: authReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof makeStore>;

export function makeStore(preloadedState?: Partial<RootState>) {
  return configureStore({
    reducer: rootReducer,
    preloadedState: preloadedState as any,
  });
}

type RenderWithStoreOptions = {
  preloadedState?: Partial<RootState>;
  store?: AppStore;
  route?: string;
} & Omit<RenderOptions, "wrapper">;

export function renderWithStore(
  ui: React.ReactElement,
  {
    preloadedState,
    store = makeStore(preloadedState),
    route = "/",
    ...renderOptions
  }: RenderWithStoreOptions = {},
) {
  function Wrapper({ children }: { children: React.ReactNode }) {
    return (
      <Provider store={store}>
        <MemoryRouter initialEntries={[route]}>{children}</MemoryRouter>
      </Provider>
    );
  }

  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}
