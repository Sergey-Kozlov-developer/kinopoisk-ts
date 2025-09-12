import { useEffect, useState } from "react";
import { SingleApiResponse } from "./type";
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
			try {
				const response = await axios.get<SingleApiResponse<T>>(
					`${BASE_URL}/${endpoint}/${id}`,
					{
						headers: {
							accept: "application/json",
							"X-API-KEY": API_KEY,
						},
					}
				);
				setData(response.data.data);
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
