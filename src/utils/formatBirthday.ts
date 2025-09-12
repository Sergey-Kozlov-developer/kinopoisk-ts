// Форматирование даты рождения
export const formatBirthday = (dateString: string) => {
	if (!dateString) return "Не указано";
	try {
		const options: Intl.DateTimeFormatOptions = {
			day: "numeric",
			month: "long",
			year: "numeric",
		};
		return new Date(dateString).toLocaleDateString("ru-RU", options);
	} catch (error) {
		return error instanceof Error ? error.message : "Неверный формат даты";
	}
};
