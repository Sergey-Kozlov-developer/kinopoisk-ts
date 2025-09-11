import { Person } from "../../types/person";
import PersonItem from "./PersonItem";

interface PersonProps {
	persons: Person[];
}

export default function PersonList({ persons }: PersonProps) {
	return (
		<div className="movie__list">
			{persons.map((person) => (
				<PersonItem key={person.id} person={person} />
			))}
		</div>
	);
}
