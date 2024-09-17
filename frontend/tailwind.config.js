// frontend/tailwind.config.js
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
      "./public/index.html",
    ],
    theme: {
      extend: {
        colors: {
          darkTheme: {
            background: '#121212',
            text: '#e0e0e0',
            primary: '#bb86fc',
            secondary: '#03dac6',
          },
          darkTheme2: {
            background: '#0d0d0d',
            text: '#e0e0e0',
            primary: '#ff6347',
            secondary: '#32cd32',
          },
          darkTheme3: {
            background: '#1c1c1c',
            text: '#e0e0e0',
            primary: '#1e90ff',
            secondary: '#ff6347',
          },
        },
      },
    },
    plugins: [],
  };
  