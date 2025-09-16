// import { useState } from "react";
import MovieList from "../../components/Movie/MovieList";
import { useKinopoiskApi } from "../../hooks";
import type { Movie } from "../../types/movie";
import Pagination from "../../components/Paginate";
import { useState } from "react";
import { useKinopoiskSingle } from "../../hooks/useKinopoiskSingle";
import MovieDetailsModal from "./MovieDetailsModal";
import Search from "../../components/Search";

function Movie() {
	// const [selectedEndpoint] = useState("movie");
	// const [params] = useState({ limit: 40 });
	const {
		data: movies,
		loading,
		error,
		currentPage,
		onPageChange,
		searchValue,
		searchMode,
		totalPgae,
	} = useKinopoiskApi<Movie>("movie", {});
	// Modal
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [selectedMovieId, setSelectedMovieId] = useState<number | null>(null);
	// hook для получения детальной инф-ции о фильме
	const {
		data: detailedMovie,
		loading: isDetailsLoading,
		error: datailsError,
	} = useKinopoiskSingle<Movie>("movie", selectedMovieId);
	// клик по фильму с ID
	const handleMovieClick = (movie: Movie) => {
		setSelectedMovieId(movie.id);
		setIsModalOpen(true);
	};
	// закрытие модального окна
	const handleCloseModal = () => {
		setIsModalOpen(false);
		setSelectedMovieId(null);
	};

	return (
		<div className="wrapper">
			<Search />
			{searchMode && searchValue && (
				<div className="search-results-header">
					<h2>Search results for: "{searchValue}"</h2>
					{movies.length === 0 && !loading && (
						<p>No movies found matching your search.</p>
					)}
				</div>
			)}

			{loading && <div className="status-message">Загрузка...</div>}
			{error && (
				<div className="status-message error">Ошибка: {error}</div>
			)}
			{!loading && !error && (
				<MovieList movies={movies} onMovieClick={handleMovieClick} />
			)}
			<Pagination
				currentPage={currentPage}
				totalPage={totalPgae}
				onChangePage={onPageChange}
			/>
			{isModalOpen && (
				<MovieDetailsModal
					movie={detailedMovie}
					loading={isDetailsLoading}
					error={datailsError}
					onClose={handleCloseModal}
				/>
			)}
		</div>
	);
}

export default Movie;
