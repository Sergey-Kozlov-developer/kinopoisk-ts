import { createBrowserRouter } from "react-router";
import Layout from "./components/Layout";
import Details from "./pages/Details";
import About from "./pages/About";
import Movie from "./pages/Movie";
import PersonPage from "./pages/Person";

export const routes = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				index: true,
				element: <Movie />,
			},
			{
				path: "actor",
				element: <PersonPage />,
			},
			{
				path: "details",
				element: <Details />,
			},
			{
				path: "about",
				element: <About />,
			},
		],
	},
]);
