import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// GitHub Pages 的部署子路径由 CI 通过 --base=/prime-work/ 传入，本地开发保持根路径
export default defineConfig({
  plugins: [react()],
});
