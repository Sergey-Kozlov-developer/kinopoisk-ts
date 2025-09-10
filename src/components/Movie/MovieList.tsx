import type { Movie } from "../../types/movie";
import MovieComponent from "./MovieComponent";

interface MovieListProps {
	movies: Movie[];
}

export default function MovieList({ movies }: MovieListProps) {
	return (
		<div className="movie__list">
			{movies.map((movie) => (
				<MovieComponent key={movie.id} movie={movie} />
			))}
		</div>
	);
}
