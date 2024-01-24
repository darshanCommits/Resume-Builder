import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
			"@ui": path.resolve(__dirname, "./src/components/ui"),
			"@form": path.resolve(__dirname, "./src/components/Form"),
			"@data": path.resolve(__dirname, "./src/data"),
			"@components": path.resolve(__dirname, "./src/components"),
			"@utils": path.resolve(__dirname, "./src/utils"),
			"@models": path.resolve(__dirname, "./src/models"),
		},
	},
});
