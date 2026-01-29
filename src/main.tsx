import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import "./index.css";
import "../i18n";
import App from "./App";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Signup from "./pages/Signup";

const router = createBrowserRouter(
	[
		{
			path: "/",
			element: <App />,
			children: [
				{
					index: true,
					element: <Login />,
				},
				{
					path: "/signup",
					element: <Signup />,
				},
				{
					path: "/profile",
					element: <Profile />,
				},
			],
		},
	],
	{
		basename: import.meta.env.BASE_URL,
	},
);

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>,
);
