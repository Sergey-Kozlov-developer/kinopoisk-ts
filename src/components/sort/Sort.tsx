import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { setSortType } from "../../redux/filter/slice";

export default function Sort() {
	const [open, setOpen] = useState(false);
	const { sortType } = useSelector((state: RootState) => state.filter);
	const dispatch = useDispatch();
	const list = [
		{ name: "Название фильма", sortProperty: "name" },
		{ name: "Год", sortProperty: "year" },
	];

	const onClickItem = (item: (typeof list)[0]) => {
		dispatch(setSortType(item));
		setOpen(false);
	};

	return (
		<div className="sort-fields">
			<button className="sort-fields__btn" onClick={() => setOpen(!open)}>
				<span>Сортировать по: </span>
				<span>{sortType.name}</span>
				<span className="sort-fields__svg">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 20"
						fill="currentColor"
					>
						<path
							fillRule="evenodd"
							d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
							clipRule="evenodd"
						/>
					</svg>
				</span>
			</button>
			{open && (
				<ul className="sort-fields__ul">
					{list.map((item) => (
						<li
							className={
								sortType.sortProperty === item.sortProperty
									? "sort-fields__li active"
									: "sort-fields__li"
							}
							key={item.name}
							onClick={() => onClickItem(item)}
						>
							{item.name}
						</li>
					))}
				</ul>
			)}
		</div>
	);
}
