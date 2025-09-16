// import { useRef } from 'react';

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
	resetSearch,
	setCurrentPage,
	setSearchValue,
	setSearchMode,
} from "../../redux/filter/slice";
import { FaSearch, FaTimes } from "react-icons/fa";

export default function Search() {
	const [localSearchValue, setLocalSearchValue] = useState("");
	const dispath = useDispatch();

	const handleSubmit = (event: React.FormEvent) => {
		event.preventDefault();
		if (localSearchValue.trim()) {
			dispath(setSearchValue(localSearchValue));
			dispath(setSearchMode(true));
			dispath(setCurrentPage(1));
		}
	};
	// очищаем поле ввода и делаем сброс
	const handleClear = () => {
		setLocalSearchValue("");
		dispath(resetSearch());
	};

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setLocalSearchValue(event.target.value);
		// Optional: Auto-search as user types (debounce recommended)
	};

	return (
		<form onSubmit={handleSubmit}>
			<div className="input-group">
				<input
					// ref={inputRef}
					value={localSearchValue}
					onChange={handleInputChange}
					type="text"
					id="search"
					placeholder="Введите название фильма и нажмите Enter..."
					autoComplete="off"
				/>
				<label htmlFor="search">
					<FaSearch />
				</label>
				{localSearchValue && (
					<button
						type="button"
						onClick={handleClear}
						className="clear-button"
						aria-label="Clear search"
					>
						<FaTimes />
					</button>
				)}
			</div>
		</form>
	);
}
