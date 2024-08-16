import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173, // Set the port number to 5173
    host: '0.0.0.0', // Allows the server to be accessible externally
  },
})