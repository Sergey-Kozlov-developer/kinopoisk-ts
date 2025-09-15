export default function Search() {
	return (
		<form>
			<div className="input-group">
				<input
					type="text"
					id="search"
					placeholder="Search..."
					autoComplete="off"
				/>
				<label htmlFor="search">
					<i className="fas fa-search"></i>
				</label>
			</div>
		</form>
	);
}
