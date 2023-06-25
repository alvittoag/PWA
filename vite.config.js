import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

const pwaPlugin = createPWA({
  config: require("./pwa.config.js"),
});

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), pwaPlugin],
});
