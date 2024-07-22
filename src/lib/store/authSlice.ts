import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface IAuthState {
  user: IUserAuth | null;
}

const initialState: IAuthState = {
  user: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthState: (state, action: PayloadAction<IAuthState>) => {
      state.user = action.payload.user;
    },
    deleteAuthState: (state) => {
      state.user = null;
    },
  },
});

export const { setAuthState, deleteAuthState } = authSlice.actions;
export const authReducer = authSlice.reducer;
