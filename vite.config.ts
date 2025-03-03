import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { vercelPreset } from '@vercel/react-router/vite';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import ReactComponentName from "react-scan/react-component-name/vite"; 

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    ReactComponentName({}),
    vercelPreset(),
    react(),
    mode === 'development' &&
    componentTagger(),
    ViteImageOptimizer({
      png: {
        quality: 80,
      },
      jpeg: {
        quality: 80,
      },
      jpg: {
        quality: 80,
      },
    }),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
