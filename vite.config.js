import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Plain Vite + React. Styling is handled entirely by CSS Modules and the
// global design-system stylesheet in src/styles — no CSS framework.
export default defineConfig({
  plugins: [react()],
});
