// import { useState } from "react";
import MovieList from "../../components/Movie/MovieList";
import { useKinopoiskApi } from "../../hooks";
import type { Movie } from "../../types/movie";
import Pagination from "../../components/Paginate";

function Movie() {
	// const [selectedEndpoint] = useState("movie");
	// const [params] = useState({ limit: 40 });
	const {
		data: movies,
		loading,
		error,
		currentPage,
		onPageChange,
		totalPgae,
	} = useKinopoiskApi<Movie>("movie", {});

	return (
		<div className="wrapper">
			{loading && <div className="status-message">Загрузка...</div>}
			{error && (
				<div className="status-message error">Ошибка: {error}</div>
			)}
			{!loading && !error && <MovieList movies={movies} />}
			<Pagination
				currentPage={currentPage}
				totalPage={totalPgae}
				onChangePage={onPageChange}
			/>
		</div>
	);
}

export default Movie;
