import { defineConfig } from "@playwright/test";

export default defineConfig({
  projects: [
    {
      name: "Chromium",
      use: { browserName: "chromium" },
    },
    {
      name: "Firefox",
      use: { browserName: "firefox" },
    },
  ],
  testDir: "./tests",
  retries: 0,
  use: {
    headless: true,
  },
});
