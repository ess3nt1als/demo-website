import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "node:path";

export default defineConfig({ base: "/demo-website/", root: "github", plugins: [react()], publicDir: resolve(__dirname, "public"), build: { outDir: resolve(__dirname, "docs"), emptyOutDir: true } });
