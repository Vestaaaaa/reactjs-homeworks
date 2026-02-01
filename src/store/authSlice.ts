import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {
  uid: string;
  email: string | null;
}

interface AuthState {
  isAuth: boolean;
  user: User | null;
}

const loadAuthFromStorage = (): AuthState => {
  try {
    const savedAuth = localStorage.getItem("authState");
    if (savedAuth) {
      return JSON.parse(savedAuth);
    }
  } catch (error) {
    console.error("Error loading auth from localStorage:", error);
  }
  return {
    isAuth: false,
    user: null,
  };
};

const initialState: AuthState = loadAuthFromStorage();

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action: PayloadAction<User>) {
      state.isAuth = true;
      state.user = action.payload;
      localStorage.setItem("authState", JSON.stringify(state));
    },
    logout(state) {
      state.isAuth = false;
      state.user = null;
      localStorage.removeItem("authState");
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
