import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { User } from "../../types/user";

export interface FilterState {
  filters: Partial<Pick<User, "name" | "username" | "email" | "phone">>;
}

const initialState: FilterState = {
  filters: { name: "", username: "", email: "", phone: "" },
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setFilter(
      state,
      action: PayloadAction<{
        field: keyof FilterState["filters"];
        value: string;
      }>
    ) {
      state.filters[action.payload.field] = action.payload.value;
    },
    resetFilters(state) {
      state.filters = { name: "", username: "", email: "", phone: "" };
    },
  },
});
