import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FilterSliceState } from "./type";

const initialState: FilterSliceState = {
	currentPage: 1,
};

const filterSlice = createSlice({
	name: "filters",
	initialState,
	reducers: {
		setCurrentPage(state, action: PayloadAction<number>) {
			state.currentPage = action.payload;
		},
	},
});

export const { setCurrentPage } = filterSlice.actions;

export default filterSlice.reducer;
