import type { Movie } from "../../types/movie";
import MovieComponent from "./MovieComponent";

interface MovieListProps {
	movies: Movie[];
	onMovieClick: (movie: Movie) => void;
}

export default function MovieList({ movies, onMovieClick }: MovieListProps) {
	return (
		<div className="movie__list">
			{movies.map((movie) => (
				<MovieComponent
					key={movie.id}
					movie={movie}
					onClick={onMovieClick}
				/>
			))}
		</div>
	);
}
