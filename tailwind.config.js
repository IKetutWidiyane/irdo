module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'irdo-blue': '#3b82f6',
        'irdo-purple': '#7c3aed',
      },
      transitionDuration: {
        '2000': '2000ms',
      }
    },
  },
  plugins: [],
}