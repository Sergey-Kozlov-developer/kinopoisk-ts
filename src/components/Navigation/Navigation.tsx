import { Link, useLocation } from "react-router";

export default function Navigation() {
	const location = useLocation();
	const isActive = (path: string) => location.pathname === path;
	return (
		<section className="navigation">
			<div className="nav-container">
				<div className="brand">
					<a href="#!">kinopoisk api</a>
				</div>
				<nav>
					<div className="nav-mobile">
						<Link id="nav-toggle" to="/">
							<span></span>
						</Link>
					</div>
					<ul className="nav">
						<li className="nav__li">
							<Link
								to="/"
								className={`nav__link ${
									isActive("/") ? "active" : ""
								}`}
							>
								Фильмы
							</Link>
						</li>
						<li className="nav__li">
							<Link
								to="/actor"
								className={`nav__link ${
									isActive("/actor") ? "active" : ""
								}`}
							>
								Актеры
							</Link>
						</li>
						<li className="nav__li">
							<Link
								to="/about"
								className={`nav__link ${
									isActive("/about") ? "active" : ""
								}`}
							>
								About
							</Link>
						</li>
						<li className="nav__li">
							<Link
								to="/details"
								className={`nav__link ${
									isActive("/details") ? "active" : ""
								}`}
							>
								Детальная нформация
							</Link>
						</li>

						{/* <ul className="nav-dropdown">
								<li className="nav__li">
									<a href="#!">Web Design</a>
								</li>
								<li className="nav__li">
									<a href="#!">Web Development</a>
								</li>
								<li className="nav__li">
									<a href="#!">Graphic Design</a>
								</li>
							</ul> */}
						{/* </li> */}

						{/* <li className="nav__li">
							<Link
								to="#!"
								className={`nav__link ${
									isActive("/") ? "active" : ""
								}`}
							>
								Portfolio
							</Link>
						</li>
						<li className="nav__li">
							<Link
								to="#!"
								className={`nav__link ${
									isActive("/") ? "active" : ""
								}`}
							>
								Contact
							</Link>
						</li> */}
					</ul>
				</nav>
			</div>
		</section>
	);
}
