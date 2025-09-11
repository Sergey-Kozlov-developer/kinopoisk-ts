import ReactPaginate from "react-paginate";

type PaginationProps = {
	currentPage: number;
	totalPage: number;
	onChangePage: (page: number) => void;
};

const Pagination = ({
	currentPage,
	onChangePage,
	totalPage,
}: PaginationProps) => {
	return (
		<div>
			<ReactPaginate
				className="pagination"
				breakLabel="..."
				nextLabel=">"
				previousLabel="<"
				onPageChange={(event) => onChangePage(event.selected + 1)}
				pageRangeDisplayed={3}
				pageCount={totalPage}
				forcePage={currentPage - 1}
				renderOnZeroPageCount={null}
			/>
		</div>
	);
};

export default Pagination;
