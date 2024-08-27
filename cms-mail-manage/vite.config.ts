import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import * as path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: "@", replacement: path.resolve(__dirname, "src") },
      { find: "@core", replacement: path.resolve(__dirname, "src/core") },
      { find: "@modules", replacement: path.resolve(__dirname, "src/modules") },
      { find: "@pages", replacement: path.resolve(__dirname, "src/pages") },
      { find: "@helpers", replacement: path.resolve(__dirname, "src/utils/helpers") }
    ],
  },
})
