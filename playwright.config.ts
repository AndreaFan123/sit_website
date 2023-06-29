import type { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  webServer: {
    command: "npm run dev",
    url: "http://localhost:5174",
    reuseExistingServer: !process.env.CI,
  },
  testDir: "e2e",
  use: {
    baseURL: "http://localhost:5174",
  },
};

export default config;
