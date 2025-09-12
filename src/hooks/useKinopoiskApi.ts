import axios from "axios";
import { useEffect, useState } from "react";
// import qs from "qs";
// import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { setCurrentPage } from "../redux/filter/slice";
import { ApiResponse } from "./type";

// API ключ и URL
const API_KEY = import.meta.env.VITE_REACT_APP_LOTR_API_KEY;
const BASE_URL = "https://api.kinopoisk.dev/v1.4";

export function useKinopoiskApi<T>(endpoint: string, queryParams = {}) {
	// получение данных
	const [data, setData] = useState<T[]>([]);
	// состояние загрузки
	const [loading, setLoading] = useState(true);
	// ошибки если есть
	const [error, setError] = useState<string | null>(null);
	// const navigate = useNavigate();
	// pagination
	const [totalPgae, setTotalPage] = useState(0);
	const dispath = useDispatch();
	const { currentPage } = useSelector((state: RootState) => state.filter);

	// ПЕРЕДЕЛАТЬ ВШИТИЕ ПАРАМЕТРОВ В URL
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
				// весь список
				const response = await axios.get<ApiResponse<T>>(
					`${BASE_URL}/${endpoint}?page=${currentPage}`,
					{
						headers: {
							accept: "application/json",
							"X-API-KEY": API_KEY,
						},
						params: {
							...queryParams,
							limit: 20,
						},
					}
				);
				setData(response.data.docs);
				setTotalPage(response.data.pages);
				setError(null);
			} catch (error) {
				setError(
					error instanceof Error ? error.message : "Unknown error"
				);
				setData([]);
				setTotalPage(0);
			} finally {
				setLoading(false);
			}
		};
		fetchData();
	}, [endpoint, currentPage, JSON.stringify(queryParams)]);

	const handlePageChange = (page: number) => {
		dispath(setCurrentPage(page));
	};

	// ПЕРЕДЕЛАТЬ ВШИТИЕ ПАРАМЕТРОВ В URL
	// вшиваем в адресную строку
	// useEffect(() => {
	// 	const queryString = qs.stringify(
	// 		{
	// 			endpoint,
	// 			queryParams: JSON.stringify(queryParams),
	// 		},
	// 		{
	// 			encode: false,
	// 			allowDots: true,
	// 		}
	// 	);
	// 	// console.log(queryString);
	// 	navigate(`?${queryString}`, { replace: true });
	// }, [endpoint, navigate, queryParams]);

	return {
		data,
		error,
		loading,
		currentPage,
		totalPgae,
		onPageChange: handlePageChange,
	};
}
