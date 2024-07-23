import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface IAuthState {
  user: IUserAuth | null;
  roles: string[];
}

const initialState: IAuthState = {
  user: null,
  roles: [],
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthState: (state, action: PayloadAction<IAuthState>) => {
      state.user = action.payload.user;
      state.roles = action.payload.roles;
    },
    deleteAuthState: (state) => {
      state.user = null;
    },
  },
});

export const { setAuthState, deleteAuthState } = authSlice.actions;
export const authReducer = authSlice.reducer;
