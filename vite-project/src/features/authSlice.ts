import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../app/store";

interface AuthState {
  isAuthenticated: boolean;
  user: { name: string; password: string } | null;
}

const storedUsers = JSON.parse(localStorage.getItem("users") || "[]");

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<{ name: string; password: string }>) => {
      const { name, password } = action.payload;

      const storedUsers = JSON.parse(localStorage.getItem("users") || "[]");
      const user = storedUsers.find((user: { name: string; password: string }) => 
        user.name === name && user.password === password
      );

      if (user) {
        state.isAuthenticated = true;
        state.user = user;
        localStorage.setItem("currentUser", JSON.stringify(user)); 
      } else {
        alert("User doesn't exist! Redirecting to Sign-up.");
        window.location.href = "/signin";
      }
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      localStorage.removeItem("currentUser");
    },
    register: (state, action: PayloadAction<{ name: string; password: string }>) => {
      const { name, password } = action.payload;
      
      let users = JSON.parse(localStorage.getItem("users") || "[]");

      if (users.some((user: { name: string }) => user.name === name)) {
        alert("User already exists! Please log in.");
        window.location.href = "/login";
        return;
      }

      const newUser = { name, password };
      users.push(newUser);
      localStorage.setItem("users", JSON.stringify(users));
      localStorage.setItem("currentUser", JSON.stringify(newUser));

      state.isAuthenticated = true;
      state.user = newUser;
      window.location.href = "/stores"; 
    },
  },
});

export const { login, logout, register } = authSlice.actions;
export const selectAuth = (state: RootState) => state.auth;
export default authSlice.reducer;
