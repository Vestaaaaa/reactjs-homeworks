import "@testing-library/jest-dom/vitest";
import { vi } from "vitest";

const localStorageMock = {
  getItem: vi.fn(),
  setItem: vi.fn(),
  clear: vi.fn(),
  removeItem: vi.fn(),
};
global.localStorage = localStorageMock as any;

vi.spyOn(console, "log").mockImplementation(() => {});
vi.spyOn(console, "warn").mockImplementation(() => {});
vi.spyOn(console, "error").mockImplementation(() => {});

global.fetch = vi.fn();

vi.mock("../firebase", () => ({
  auth: {},
}));
