import { Person } from "../../types/person";
import { formatBirthday } from "../../utils/formatBirthday";
import { urlImageFixed } from "../../utils/urlImageFixed";

interface PersonDetailsModalProps {
	person: Person | null;
	loading: boolean;
	error: string | null;
	onClose: () => void;
}

export default function PersonDetailsModal({
	person,
	onClose,
	loading,
	error,
}: PersonDetailsModalProps) {
	const fixedPhotoUrl = person ? urlImageFixed(person.photo) : "";

	// Получение иконки для пола
	const getGenderIcon = () => {
		return person?.sex === "Женский" ? "♀" : "♂";
	};

	// Фильтрация фильмов
	const mainMovies =
		person?.movies && Array.isArray(person.movies)
			? person.movies.filter(
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

				{!loading && !error && person && (
					<>
						<div className="modal-header">
							<img
								src={fixedPhotoUrl}
								alt={person.name || person.enName}
								className="modal-actor-image"
							/>
							<div className="modal-actor-info">
								<h2>{person.name}</h2>
								{person.enName && (
									<p className="modal-actor-enname">
										{person.enName}
									</p>
								)}
							</div>
						</div>

						<div className="modal-body">
							<div className="modal-details">
								<div className="detail-item">
									<span className="detail-label">Пол:</span>
									<span className="detail-value">
										{getGenderIcon()}{" "}
										{person.sex || "Не указано"}
									</span>
								</div>
								{person.age && (
									<div className="detail-item">
										<span className="detail-label">
											Возраст:
										</span>
										<span className="detail-value">
											{person.age} лет
										</span>
									</div>
								)}
								{person.birthday && (
									<div className="detail-item">
										<span className="detail-label">
											Дата рождения:
										</span>
										<span className="detail-value">
											{formatBirthday(person.birthday)}
										</span>
									</div>
								)}
							</div>

							{mainMovies.length > 0 ? (
								<div className="modal-movies">
									<h3>Фильмография ({mainMovies.length})</h3>
									<div className="movies-list">
										{mainMovies.map((movie) => (
											<div
												key={movie.id}
												className="movie-item"
											>
												<h4 className="movie-title">
													{movie.name ||
														movie.alternativeName ||
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
													{movie.rating && (
														<span className="movie-rating">
															{movie.rating.toFixed(
																1
															)}
														</span>
													)}
												</div>
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
