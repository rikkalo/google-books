import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import EnvironmentPlugin from "vite-plugin-environment";

const PORT = Number(process.env.PORT ?? 5137);
const API_URL = process.env.API_URL ?? "https://localhost:3000";

export default defineConfig({
  server: {
    port: PORT,
    host: true,
    strictPort: true,
  },
  plugins: [react(), EnvironmentPlugin({ API_URL })],
});
