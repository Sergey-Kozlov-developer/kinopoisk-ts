import { useEffect, useState } from "react";
// import { SingleApiResponse } from "./type";
import axios from "axios";

const API_KEY = import.meta.env.VITE_REACT_APP_LOTR_API_KEY;
const BASE_URL = "https://api.kinopoisk.dev/v1.4";

export function useKinopoiskSingle<T>(endpoint: string, id?: number | null) {
	const [data, setData] = useState<T | null>(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		if (!id) {
			setData(null);
			setLoading(false);
			return;
		}

		const fetchData = async () => {
			setLoading(true);
			setError(null);
			try {
				const response = await axios.get<T>(
					`${BASE_URL}/${endpoint}/${id}`,
					{
						headers: {
							accept: "application/json",
							"X-API-KEY": API_KEY,
						},
					}
				);

				// Проверяем структуру ответа
				if (response.data && response.data) {
					setData(response.data);
				} else {
					console.error(
						"Неверная структура ответа API:",
						response.data
					);
					setError("Неверная структура данных от API");
				}
				setData(response.data);
				setError(null);
			} catch (error) {
				setError(
					error instanceof Error ? error.message : "Unknown error"
				);
				setData(null);
			} finally {
				setLoading(false);
			}
		};

		fetchData();
	}, [endpoint, id]);
	return {
		data,
		error,
		loading,
	};
}
