import { Person } from "../../types/person";
import noImage from "@/assets/images/no-image.webp";
import { urlImageFixed } from "../../utils/urlImageFixed";

interface PersonItemProps {
	person: Person;
}

export default function PersonItem({ person }: PersonItemProps) {
	const fixedPhotoUrl = urlImageFixed(person.photo);
	return (
		<div className="movie-card">
			{/* IMAGE FILM */}

			<div className="movie-img-container">
				{person.photo ? (
					<img
						src={fixedPhotoUrl}
						alt={person.enName}
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
						{person.name ?? person.enName}
						<span className="year-badge">{person.birthday}</span>
					</h1>
					{/* RATING */}
					{/* {movie.ageRating ? (
						<span className="rating-badge">{movie.ageRating}</span>
					) : (
						<span></span>
					)} */}
				</div>
				{/* TIME FILMS */}
				{/* <div className="metadata">
					<div className="duration">
						<svg className="duration-icon" viewBox="0 0 24 24">
							<path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" />
							<path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
						</svg>
						{formatDuration(movie.movieLength)}
					</div>
				</div> */}
				{/* GENRE FILM */}
				{/* <div className="genres">
					{movie.genres.map((genre, index) => (
						<span key={index} className="genre-tag">
							{genre.name}
						</span>
					))}
				</div> */}

				{/* <div className="description-section">
					<h5 className="section-title">SUMMARY</h5>
					<p className="movie-description" id="description">
						
					</p>
				</div> */}

				{/* <div className="action-row">
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

					
				</div> */}
			</div>
		</div>
	);
}
