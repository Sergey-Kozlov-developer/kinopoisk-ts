// Интерфейс для ответа API
export interface ApiResponse<T> {
	docs: T[];
	total: number;
	limit: number;
	page: number;
	pages: number;
}
export interface SingleApiResponse<T> {
	data: T;
}
