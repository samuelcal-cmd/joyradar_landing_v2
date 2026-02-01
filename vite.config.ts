import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // IMPORTANT: Un-comment the line below and replace 'REPO_NAME' with your actual GitHub repository name
  // if you are deploying to GitHub Pages at username.github.io/REPO_NAME
  base: '/joyradar_landing_v2/', 
});
