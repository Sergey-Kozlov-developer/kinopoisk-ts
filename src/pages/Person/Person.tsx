// import { useState } from "react";
import PersonList from "../../components/Person";
import { useKinopoiskApi } from "../../hooks";
import { Person } from "../../types/person";
import Pagination from "../../components/Paginate/PaginateList";
import { useState } from "react";
import PersonDetailsModal from "./PersonDetailsModal";
import { useKinopoiskSingle } from "../../hooks/useKinopoiskSingle";

export default function PersonPage() {
	const {
		data: persons,
		loading,
		error,
		currentPage,
		onPageChange,
		totalPgae,
	} = useKinopoiskApi<Person>("person", {});
	const [selectedPerson, setSelectedPerson] = useState<Person | null>(null);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [selectedPersonId, setSelectedPersonId] = useState<number | null>(
		null
	);

	// Используем отдельный хук для получения детальной информации
	const {
		data: detailedPerson,
		loading: isDetailsLoading,
		error: detailsError,
	} = useKinopoiskSingle<Person>("person", selectedPersonId);

	const handlePersonClick = (person: Person) => {
		setSelectedPerson(person);
		setSelectedPersonId(person.id);
		setIsModalOpen(true);
	};

	const handleCloseModal = () => {
		setIsModalOpen(false);
		setSelectedPersonId(null);
		setSelectedPerson(null);
	};
	return (
		<>
			<div className="wrapper">
				{loading && <div className="status-message">Загрузка...</div>}
				{error && (
					<div className="status-message error">Ошибка: {error}</div>
				)}
				{!loading && !error && (
					<PersonList
						persons={persons}
						onPersonClick={handlePersonClick}
					/>
				)}
				<Pagination
					currentPage={currentPage}
					totalPage={totalPgae}
					onChangePage={onPageChange}
				/>
			</div>
			{isModalOpen && selectedPerson && (
				<PersonDetailsModal
					person={detailedPerson}
					loading={isDetailsLoading}
					error={detailsError}
					onClose={handleCloseModal}
				/>
			)}
		</>
	);
}
