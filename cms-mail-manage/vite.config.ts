import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import * as path from "path"

const resolveAlias = () => {
  return [
    { find: "@", replacement: path.resolve(__dirname, "src") },
    { find: "@modules", replacement: path.resolve(__dirname, "src/modules") },
    { find: "@routes", replacement: path.resolve(__dirname, "src/routes") },
    { find: "@styles", replacement: path.resolve(__dirname, "src/styles") },
    { find: "@layouts", replacement: path.resolve(__dirname, "src/layouts") },
    { find: "@pages", replacement: path.resolve(__dirname, "src/pages") },
  ]
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: resolveAlias()
  }
})
