import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv'
import EnvironmentPlugin from 'vite-plugin-environment'

dotenv.config()

const PORT = Number(process.env.PORT ?? 3000)
const API_URL = process.env.API_URL ?? 'http://localhost:80'

export default defineConfig({
  server: {
    port: PORT,
    host: true,
    strictPort: true,
  },
  plugins: [react(), EnvironmentPlugin({ API_URL })],
})
