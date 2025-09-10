import { Outlet } from "react-router";
import Navigation from "../Navigation";

export default function Layout() {
	return (
		<>
			<Navigation />
			<main className="container">
				<Outlet />
			</main>
		</>
	);
}
