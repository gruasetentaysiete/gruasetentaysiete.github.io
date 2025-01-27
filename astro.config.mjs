import { defineConfig } from 'astro/config';

// Import the tailwindcss plugin
import tailwind from "@astrojs/tailwind";

// Import the react plugin
import react from "@astrojs/react";

// Set the port for the dev server
const SERVER_PORT = 4321;

//  Url to access the page furing local development
const LOCAL_HOST_URL = `http://localhost:${SERVER_PORT}`;

// Url to access the page during production
const PRODUCTION_URL = 'https://gruas77.github.io';

// Astro command npm script runs
const ASTRO_SCRIPT = process.env.npm_lifecycle_script || "";
const isBuild = ASTRO_SCRIPT.includes("astro build");

// Set the base URL for the site
const BASE_URL = isBuild ? PRODUCTION_URL : LOCAL_HOST_URL;


// https://astro.build/config
export default defineConfig({
  server: {
    port: SERVER_PORT
  },
  site: BASE_URL,
  integrations: [tailwind(), react()]
});