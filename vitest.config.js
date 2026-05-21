import config from "./vite.config";
import { defineConfig } from "vitest/config";
import { playwright } from "@vitest/browser-playwright";

export default defineConfig({
  plugins: [...config.plugins],
  test: {
    globals: true,
    browser: {
      enabled: true,
      name: "chromium", // or 'firefox', 'webkit'
      provider: playwright(),
      instances: [{ browser: "chromium" }],
    },
  },
});
