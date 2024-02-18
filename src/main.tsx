import "@/index.css";
import App from "@/App";
import React from "react";
import ReactDOM from "react-dom/client";

// biome-ignore lint/style/noNonNullAssertion: it just exists
const $root = document.getElementById("root")!;

ReactDOM.createRoot($root).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
);
