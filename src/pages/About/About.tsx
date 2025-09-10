// import { useState, type SetStateAction } from "react";
// import { useKinopoiskApi } from "../../hooks";

function About() {
	// const [selectedEndpoint, setSelectedEndpoint] = useState("movie");
	// const [searchQuery, setSearchQuery] = useState("");
	// const [params, setParams] = useState({ limit: 20 });

	// const { data, error, loading } = useKinopoiskApi(selectedEndpoint, params);

	// const handleSearch = (e) => {
	// 	e.preventDefault();
	// 	if (selectedEndpoint.includes("search")) {
	// 		setParams({ ...params, query: searchQuery });
	// 	} else {
	// 		setParams({ ...params });
	// 	}
	// };

	// const handleEndpointChange = (endpoint: SetStateAction<string>) => {
	// 	setSelectedEndpoint(endpoint);
	// 	setSearchQuery("");
	// 	setParams({ limit: 20 });
	// };

	return (
		<div>About</div>
		// <div className="app">
		// 	<header className="app-header">
		// 		<h1>Кинопоиск API Explorer</h1>

		// 		<div className="endpoint-selector">
		// 			<button
		// 				className={selectedEndpoint === "movie" ? "active" : ""}
		// 				onClick={() => handleEndpointChange("movie")}
		// 			>
		// 				Фильмы
		// 			</button>
		// 			<button
		// 				className={
		// 					selectedEndpoint === "movie/search" ? "active" : ""
		// 				}
		// 				onClick={() => handleEndpointChange("movie/search")}
		// 			>
		// 				Поиск фильмов
		// 			</button>
		// 			<button
		// 				className={
		// 					selectedEndpoint === "person" ? "active" : ""
		// 				}
		// 				onClick={() => handleEndpointChange("person")}
		// 			>
		// 				Персоны
		// 			</button>
		// 			<button
		// 				className={
		// 					selectedEndpoint === "person/search" ? "active" : ""
		// 				}
		// 				onClick={() => handleEndpointChange("person/search")}
		// 			>
		// 				Поиск персон
		// 			</button>
		// 			<button
		// 				className={
		// 					selectedEndpoint === "review" ? "active" : ""
		// 				}
		// 				onClick={() => handleEndpointChange("review")}
		// 			>
		// 				Отзывы
		// 			</button>
		// 		</div>

		// 		{selectedEndpoint.includes("search") && (
		// 			<form onSubmit={handleSearch} className="search-form">
		// 				<input
		// 					type="text"
		// 					value={searchQuery}
		// 					onChange={(e) => setSearchQuery(e.target.value)}
		// 					placeholder={`Поиск ${
		// 						selectedEndpoint.includes("movie")
		// 							? "фильмов"
		// 							: "персон"
		// 					}...`}
		// 					className="search-input"
		// 				/>
		// 				<button type="submit" className="search-button">
		// 					Найти
		// 				</button>
		// 			</form>
		// 		)}
		// 	</header>

		// 	<main className="app-main">
		// 		<div className="info-panel">
		// 			<h3>Текущий endpoint: {selectedEndpoint}</h3>
		// 			<p>Параметры: {JSON.stringify(params)}</p>
		// 		</div>

		// 		{loading && <div className="status-message">Загрузка...</div>}
		// 		{error && (
		// 			<div className="status-message error">Ошибка: {error}</div>
		// 		)}

		// 		{data && data.docs && data.docs.length > 0 ? (
		// 			<div className="results-container">
		// 				<h2>Результаты ({data.docs.length})</h2>
		// 				<div className="results-grid">
		// 					{data.docs.map((item) => (
		// 						<div key={item.id} className="result-card">
		// 							<h3>
		// 								{item.name ||
		// 									item.enName ||
		// 									"Без названия"}
		// 							</h3>
		// 							<p>ID: {item.id}</p>
		// 							{item.year && <p>Год: {item.year}</p>}
		// 							{item.rating && (
		// 								<p>
		// 									Рейтинг:{" "}
		// 									{item.rating.kp || item.rating.imdb}
		// 								</p>
		// 							)}
		// 							{item.description && (
		// 								<p className="description">
		// 									{item.description}
		// 								</p>
		// 							)}
		// 						</div>
		// 					))}
		// 				</div>
		// 			</div>
		// 		) : (
		// 			!loading &&
		// 			!error && (
		// 				<div className="status-message">
		// 					Выберите endpoint для загрузки данных
		// 				</div>
		// 			)
		// 		)}
		// 	</main>
		// </div>
	);
}

export default About;
