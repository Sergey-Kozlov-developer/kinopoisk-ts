import { Person } from "../../types/person";
import PersonItem from "./PersonItem";

interface PersonProps {
	persons: Person[];
	onPersonClick: (person: Person) => void;
}

export default function PersonList({ persons, onPersonClick }: PersonProps) {
	return (
		<div className="actors-grid">
			{persons.map((person) => (
				<PersonItem
					key={person.id}
					person={person}
					onClick={onPersonClick}
				/>
			))}
		</div>
	);
}
