import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import tsconfigPaths from "vite-tsconfig-paths"

export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(), // 👈 THIS fixes @ alias
  ],
  //base: '/Sanele-Sithole-Portfolio/',
})
