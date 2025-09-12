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
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [selectedPersonId, setSelectedPersonId] = useState<number | null>(
		null
	);

	// отдельный хук для получения детальной информации
	const {
		data: detailedPerson,
		loading: isDetailsLoading,
		error: detailsError,
	} = useKinopoiskSingle<Person>("person", selectedPersonId);
	// Клик по актеру с ID
	const handlePersonClick = (person: Person) => {
		setSelectedPersonId(person.id);
		setIsModalOpen(true);
	};
	// Закрытие модального окна
	const handleCloseModal = () => {
		setIsModalOpen(false);
		setSelectedPersonId(null);
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
			{isModalOpen && (
				<PersonDetailsModal
					// person={detailedPerson || selectedPerson}
					person={detailedPerson}
					loading={isDetailsLoading}
					error={detailsError}
					onClose={handleCloseModal}
				/>
			)}
		</>
	);
}
