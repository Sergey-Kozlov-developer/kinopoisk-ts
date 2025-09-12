import { Person } from "../../types/person";
// import noImage from "@/assets/images/no-image.webp";
import { urlImageFixed } from "../../utils/urlImageFixed";

interface PersonItemProps {
	person: Person;
	onClick: (person: Person) => void;
}

export default function PersonItem({ person, onClick }: PersonItemProps) {
	const fixedPhotoUrl = urlImageFixed(person.photo);
	// Форматирование даты рождения
	// const formatBirthday = (dateString: string | number | Date) => {
	// 	if (!dateString) return "Не указано";
	// 	const options = { day: "numeric", month: "long", year: "numeric" };
	// 	return new Date(dateString).toLocaleDateString("ru-RU", options);
	// };

	// Получение иконки для пола
	const getGenderIcon = () => {
		return person.sex === "Женский" ? "♀" : "♂";
	};
	const handleClick = () => {
		onClick(person);
	};

	return (
		<div className="actor-card">
			<div className="actor-card__image-container">
				<img
					src={fixedPhotoUrl}
					alt={person.name || person.enName}
					className="actor-card__image"
				/>
				<div className="actor-card__gender">{getGenderIcon()}</div>
			</div>

			<div className="actor-card__content">
				<h3 className="actor-card__name">{person.name}</h3>
				<p className="actor-card__en-name">{person.enName}</p>

				{/* <div className="actor-card__birthday">
					<span className="actor-card__label">Дата рождения:</span>
					<span>{formatBirthday(person.birthday)}</span>
				</div> */}
				<div className="actor-card__birthday">
					<span className="actor-card__label">Возраст:</span>
					<span>{person.age ?? "неизвестно"}</span>
				</div>
				<button
					className="actor-card__details-btn"
					onClick={handleClick}
				>
					Подробно об актере
				</button>
			</div>
		</div>
	);
}
