import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FilterSliceState } from "./type";

const initialState: FilterSliceState = {
	currentPage: 1,
	searchValue: "",
	searchMode: false, // нахождение в режиме поиска
};

const filterSlice = createSlice({
	name: "filters",
	initialState,
	reducers: {
		setCurrentPage(state, action: PayloadAction<number>) {
			state.currentPage = action.payload;
		},
		setSearchValue(state, action: PayloadAction<string>) {
			state.searchValue = action.payload;
		},
		setSearchMode(state, action: PayloadAction<boolean>) {
			state.searchMode = action.payload;
		},
		resetSearch(state) {
			state.searchValue = "";
			state.searchMode = false;
			state.currentPage = 1;
		},
	},
});

export const { setCurrentPage, setSearchValue, setSearchMode, resetSearch } =
	filterSlice.actions;

export default filterSlice.reducer;
