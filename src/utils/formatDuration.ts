export const formatDuration = (minutes: number) => {
	if (!minutes) return "Длительность неизвестна";
	const hours = Math.floor(minutes / 60);
	const mins = minutes % 60;
	return `${hours}ч ${mins}мин`;
};
