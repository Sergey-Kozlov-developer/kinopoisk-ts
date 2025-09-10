import axios from "axios";
import { useEffect, useState } from "react";

// API ключ и URL
const API_KEY = import.meta.env.VITE_REACT_APP_LOTR_API_KEY;
const BASE_URL = "https://api.kinopoisk.dev/v1.4";
// Интерфейс для ответа API
interface ApiResponse<T> {
	docs: T[];
	total: number;
	limit: number;
	page: number;
	pages: number;
}
export function useKinopoiskApi<T>(endpoint: string, queryParams = {}) {
	// получение данных
	const [data, setData] = useState<T[]>([]);
	// состояние загрузки
	const [loading, setLoading] = useState(true);
	// ошибки если есть
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true);
			try {
				const response = await axios.get<ApiResponse<T>>(
					`${BASE_URL}/${endpoint}`,
					{
						headers: {
							accept: "application/json",
							"X-API-KEY": API_KEY,
						},
						params: queryParams,
					}
				);
				setData(response.data.docs);
				setError(null);
			} catch (error) {
				setError(
					error instanceof Error ? error.message : "Unknown error"
				);
				setData([]);
			} finally {
				setLoading(false);
			}
		};
		fetchData();
	}, [endpoint, JSON.stringify(queryParams)]);

	return { data, error, loading };
}
