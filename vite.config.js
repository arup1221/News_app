import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    // Define your API key here as an environment variable
    'import.meta.env.VITE_REACT_APP_NewsApi': JSON.stringify('404ddb67366240cf8005e18c52c7fc1b'),
  },
  build: {
    // Other build settings
  },
});
