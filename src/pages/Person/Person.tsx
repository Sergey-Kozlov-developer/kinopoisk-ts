import { useState } from "react";
import PersonList from "../../components/Person";
import { useKinopoiskApi } from "../../hooks";
import { Person } from "../../types/person";

export default function PersonPage() {
	const [selectedEndPoint] = useState("person");
	const [params] = useState({ limit: 10 });
	const {
		data: persons,
		loading,
		error,
	} = useKinopoiskApi<Person>(selectedEndPoint, params);
	return (
		<>
			<div className="wrapper">
				{loading && <div className="status-message">Загрузка...</div>}
				{error && (
					<div className="status-message error">Ошибка: {error}</div>
				)}
				{!loading && !error && <PersonList persons={persons} />}
			</div>
		</>
	);
}
