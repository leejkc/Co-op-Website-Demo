import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default ({ mode }) => {
  // Load the appropriate environment variables based on the current mode
  const env = loadEnv(mode, process.cwd());

  // Create an object to hold the `process.env` values
  const processEnv = {
    "process.env": {},
  };

  // Map each environment variable from `import.meta.env` to `process.env`
  for (const key in env) {
    processEnv["process.env"][key] = JSON.stringify(env[key]);
  }

  return defineConfig({
    plugins: [react()],
    define: processEnv,
  });
};
