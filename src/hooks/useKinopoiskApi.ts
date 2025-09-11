import axios from "axios";
import { useEffect, useState } from "react";
import qs from "qs";
import { useNavigate } from "react-router";

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

	const navigate = useNavigate();

	// первый рендер, парсим параметры из qs
	// useEffect(() => {
	// 	if (window.location.search) {
	// 		// преобразили в объект
	// 		const params = qs.parse(window.location.search.substring(1));
	// 	}
	// });

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

	// вшиваем в адресную строку
	useEffect(() => {
		const queryString = qs.stringify(
			{
				endpoint,
				queryParams: JSON.stringify(queryParams),
			},
			{
				encode: false,
				allowDots: true,
			}
		);
		// console.log(queryString);
		navigate(`?${queryString}`, { replace: true });
	}, [endpoint, navigate, queryParams]);

	return { data, error, loading };
}
