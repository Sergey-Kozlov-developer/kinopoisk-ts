import { Movie } from "../../types/movie";
// import { urlImageFixed } from "../../utils/urlImageFixed";
import noImage from "@/assets/images/no-image.webp";

interface MovieDetailsModalProps {
	movie: Movie | null;
	loading: boolean;
	error: string | null;
	onClose: () => void;
}

export default function MovieDetailsModal({
	movie,
	loading,
	error,
	onClose,
}: MovieDetailsModalProps) {
	// проверка на получение poster из api
	const getPoster = () => {
		if (!movie || !movie.poster) return noImage;
		return movie.poster.url || movie.poster.previewUrl || noImage;
	};
	const posterUrl = getPoster();

	const mainPersons =
		movie?.persons && Array.isArray(movie.persons)
			? movie.persons.filter(
					(movie) =>
						movie.enProfession === "actor" ||
						movie.enProfession === "actress" ||
						movie.enProfession === "producer"
			  )
			: // .slice(0, 5)
			  [];

	return (
		<div className="modal-overlay" onClick={onClose}>
			<div className="modal-content" onClick={(e) => e.stopPropagation()}>
				<button className="modal-close" onClick={onClose}>
					×
				</button>

				{loading && (
					<div className="modal-loading">
						Загрузка информации об актере...
					</div>
				)}

				{error && (
					<div className="modal-error">Ошибка загрузки: {error}</div>
				)}

				{!loading && !error && movie && (
					<>
						<div className="modal-header">
							<img
								src={posterUrl}
								alt={movie.name || movie.alternativeName}
								className="modal-actor-image"
							/>
							<div className="modal-actor-info">
								<h2>{movie.name}</h2>
								{movie.alternativeName && (
									<p className="modal-actor-enname">
										{movie.alternativeName}
									</p>
								)}
							</div>
						</div>

						<div className="modal-body">
							<div className="modal-details">
								{/* <div className="detail-item">
											<span className="detail-label">Пол:</span>
											<span className="detail-value">
												{getGenderIcon()}{" "}
												{person.sex || "Не указано"}
											</span>
										</div> */}
								{/* {person.age && (
											<div className="detail-item">
												<span className="detail-label">
													Возраст:
												</span>
												<span className="detail-value">
													{person.age} лет
												</span>
											</div>
										)} */}
							</div>

							{mainPersons.length > 0 ? (
								<div className="modal-movies">
									<h3>Актеры ({mainPersons.length})</h3>
									<div className="movies-list">
										{mainPersons.map((movie) => (
											<div
												key={movie.id}
												className="movie-item movies-details"
											>
												<h4 className="movie-title">
													{movie.name ||
														movie.enName ||
														"Неизвестный фильм"}
												</h4>

												<div className="movie-details">
													<span className="movie-profession">
														{movie.enProfession ===
														"actor"
															? "Актер"
															: movie.enProfession ===
															  "actress"
															? "Актриса"
															: movie.enProfession ===
															  "producer"
															? "Продюсер"
															: movie.enProfession}
													</span>
													{/* {movie. && (
																<span className="movie-rating">
																	{movie.rating.toFixed(
																		1
																	)}
																</span>
															)} */}
												</div>
												<img
													src={movie.photo}
													alt={
														movie.name ||
														movie.enName
													}
													className="modal-actor-image"
												/>
											</div>
										))}
									</div>
								</div>
							) : (
								<div className="modal-no-movies">
									<p>Информация о фильмах недоступна</p>
								</div>
							)}
						</div>
					</>
				)}
			</div>
		</div>
	);
}
