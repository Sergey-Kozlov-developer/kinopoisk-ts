import { Person } from "../../types/person";
// import noImage from "@/assets/images/no-image.webp";
import { urlImageFixed } from "../../utils/urlImageFixed";

interface PersonItemProps {
	person: Person;
}

export default function PersonItem({ person }: PersonItemProps) {
	const fixedPhotoUrl = urlImageFixed(person.photo);
	// Форматирование даты рождения
	const formatBirthday = (dateString: string) => {
		if (!dateString) return "Не указано";
		const options = { day: "numeric", month: "long", year: "numeric" };
		return new Date(dateString).toLocaleDateString("ru-RU", options);
	};

	// Получение иконки для пола
	const getGenderIcon = () => {
		return person.sex === "Женский" ? "♀" : "♂";
	};

	// Фильтрация только тех фильмов, где актер был в главной роли
	const mainMovies = Array.isArray(person.movies)
		? person.movies
				.filter(
					(movie) =>
						movie.enProfession === "actor" ||
						movie.enProfession === "producer"
				)
				.slice(0, 3)
		: []; // Показываем только первые 3 фильма
	return (
		<div className="actor-card">
			<div className="actor-card__image-container">
				<img
					src={fixedPhotoUrl}
					alt={person.name}
					className="actor-card__image"
					// onError={(e) => {
					// 	e.target.src = "/placeholder-actor.jpg";
					// }}
				/>
				<div className="actor-card__gender">{getGenderIcon()}</div>
			</div>

			<div className="actor-card__content">
				<h3 className="actor-card__name">{person.name}</h3>
				<p className="actor-card__en-name">{person.enName}</p>

				<div className="actor-card__birthday">
					<span className="actor-card__label">Дата рождения:</span>
					<span>{formatBirthday(person.birthday)}</span>
				</div>

				{mainMovies.length > 0 && (
					<div className="actor-card__movies">
						<p className="actor-card__label">Известные фильмы:</p>
						<ul className="actor-card__movies-list">
							{mainMovies.map((movie) => (
								<li
									key={movie.id}
									className="actor-card__movie-item"
								>
									<span className="actor-card__movie-name">
										{movie.name || movie.alternativeName}
									</span>
									{movie.rating && (
										<span className="actor-card__movie-rating">
											{movie.rating.toFixed(1)}
										</span>
									)}
								</li>
							))}
						</ul>
					</div>
				)}
			</div>
		</div>
	);
}
