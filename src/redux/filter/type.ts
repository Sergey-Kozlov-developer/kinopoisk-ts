export interface FilterSliceState {
	// searchValue: string;
	// categoryId: number;
	currentPage: number;
	searchValue: string;
	searchMode: boolean;
	sortType: {
		name: string;
		sortProperty: string;
	};
	// sort: Sort;
}
