import type { Movie } from "../../types/movie";

import noImage from "@/assets/images/no-image.webp";

interface MovieItemProps {
	movie: Movie;
}

export default function MovieComponent({ movie }: MovieItemProps) {
	const formatDuration = (minutes: number) => {
		if (!minutes) return "Длительность неизвестна";
		const hours = Math.floor(minutes / 60);
		const mins = minutes % 60;
		return `${hours}ч ${mins}мин`;
	};
	return (
		<div className="movie-card">
			{/* IMAGE FILM */}
			<div className="movie-img-container">
				{movie.poster?.url ? (
					<img
						src={movie.poster.url}
						alt={movie.name}
						className="movie-img"
					/>
				) : (
					<img src={noImage} className="movie-img no-image" />
				)}
				<div className="movie-overlay"></div>
			</div>
			<div className="movie-content">
				{/* NAME FILM */}
				<div className="title-row">
					<h1 className="movie-title">
						{movie.name ?? movie.alternativeName}
						<span className="year-badge">{movie.year}</span>
					</h1>
					{/* RATING */}
					{movie.ageRating ? (
						<span className="rating-badge">{movie.ageRating}</span>
					) : (
						<span></span>
					)}
				</div>
				{/* TIME FILMS */}
				<div className="metadata">
					<div className="duration">
						<svg className="duration-icon" viewBox="0 0 24 24">
							<path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" />
							<path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
						</svg>
						{formatDuration(movie.movieLength)}
					</div>
				</div>
				{/* GENRE FILM */}
				<div className="genres">
					{movie.genres.map((genre, index) => (
						<span key={index} className="genre-tag">
							{genre.name}
						</span>
					))}
				</div>

				<div className="ratings-row">
					<div className="star-rating">
						<div className="stars">
							<svg
								className="star star-filled"
								viewBox="0 0 24 24"
							>
								<path d="M12 2l2.4 7.4h7.6l-6 4.6 2.3 7-6.3-4.6-6.3 4.6 2.3-7-6-4.6h7.6z" />
							</svg>
							<svg
								className="star star-filled"
								viewBox="0 0 24 24"
							>
								<path d="M12 2l2.4 7.4h7.6l-6 4.6 2.3 7-6.3-4.6-6.3 4.6 2.3-7-6-4.6h7.6z" />
							</svg>
							<svg
								className="star star-filled"
								viewBox="0 0 24 24"
							>
								<path d="M12 2l2.4 7.4h7.6l-6 4.6 2.3 7-6.3-4.6-6.3 4.6 2.3-7-6-4.6h7.6z" />
							</svg>
							<svg
								className="star star-filled"
								viewBox="0 0 24 24"
							>
								<path d="M12 2l2.4 7.4h7.6l-6 4.6 2.3 7-6.3-4.6-6.3 4.6 2.3-7-6-4.6h7.6z" />
							</svg>
							<svg className="star star-half" viewBox="0 0 24 24">
								<path d="M12 2l2.4 7.4h7.6l-6 4.6 2.3 7-6.3-4.6-6.3 4.6 2.3-7-6-4.6h7.6z" />
							</svg>
						</div>
						<span className="rating-text">8.9/10</span>
					</div>

					<div className="likes">
						<svg className="heart-icon" viewBox="0 0 24 24">
							<path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
						</svg>
						<span className="likes-count">2.3M</span>
					</div>
				</div>

				<div className="description-section">
					<h5 className="section-title">SUMMARY</h5>
					<p className="movie-description" id="description">
						{movie.description ??
							"У фильма временно отсуствует описание"}
					</p>
				</div>

				{/* <div className="cast-section">
					<h5 className="section-title">Актеры</h5>
					{movie.persons.map((person, index) => (
						<div className="cast-list">
							<div key={index} className="cast-item">
								<img
									src={person.photo}
									className="cast-photo"
									alt=""
								/>
								<span className="cast-name">{person.name}</span>
							</div>
						</div>
					))}
				</div> */}

				<div className="action-row">
					<div className="watch-btn">
						<svg
							width="16"
							height="16"
							viewBox="0 0 24 24"
							fill="white"
						>
							<path d="M8 5v14l11-7z" />
						</svg>
						<span className="watch-btn-text">WATCH TRAILER</span>
					</div>

					<div className="action-btn">
						<svg className="action-icon" viewBox="0 0 24 24">
							<path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z" />
						</svg>
					</div>

					<div className="action-btn">
						<svg className="action-icon" viewBox="0 0 24 24">
							<path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z" />
						</svg>
					</div>

					<div className="action-btn">
						<svg className="action-icon" viewBox="0 0 24 24">
							<path d="M15 4C12.8 4 11 5.8 11 8c0 2.2 1.8 4 4 4s4-1.8 4-4c0-2.2-1.8-4-4-4zm4.9 8.5c.6 1 .8 2.3.8 3.5 0 2.8-2.2 5-5 5h-5.4c-3.1 0-5.6-2.5-5.6-5.6V15c0-1.1.9-2 2-2h4.6c.3 0 .5.1.7.3.5.5.8 1.1.8 1.7v.3c0 .3-.3.6-.6.6h-1.5c-.5 0-.9.4-.9.9s.4.9.9.9h2.4c1.1 0 2.1-.5 2.8-1.2.4-.4 1.2-1.5 1.2-1.5M9 17c-.8 0-1.5-.7-1.5-1.5S8.2 14 9 14s1.5.7 1.5 1.5S9.8 17 9 17z" />
						</svg>
					</div>
				</div>
			</div>
		</div>
	);
}
