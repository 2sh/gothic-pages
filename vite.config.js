import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from "vite"

import { join } from "path"
import { sync } from "glob"

import { ViteEjsPlugin } from "vite-plugin-ejs"

console.log("test", sync("./src/**/*.html"))

export default defineConfig({
  base: '',
  root: join(__dirname, "src"),
  build: {
    outDir: join(__dirname, "dist"),
    emptyOutDir: true,
    rollupOptions: {
      input: sync("./src/**/*.html"),
    },
  },
  plugins: [
    ViteEjsPlugin()
  ],
  resolve: {
    alias: {
      '@client': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})