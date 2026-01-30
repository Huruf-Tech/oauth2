import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, Navigate } from "react-router";
import { RouterProvider } from "react-router/dom";
import "./index.css";
import "../i18n";
import App from "./App";
import Account from "./pages/Account";
import Profile from "./pages/Account/Profile";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

const router = createBrowserRouter(
	[
		{
			path: "/",
			element: <App />,
			children: [
				{
					index: true,
					element: <Navigate to="/account" />,
				},
				{
					path: "/account",
					element: <Account />,
					children: [
						{
							path: "/account/profile",
							element: <Profile />,
						},
					],
				},
				{
					path: "/login",
					element: <Login />,
				},
				{
					path: "/signup",
					element: <Signup />,
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
