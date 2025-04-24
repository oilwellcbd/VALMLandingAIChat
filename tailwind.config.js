/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1A2F5A', // Dark navy blue from logo
          light: '#2C4780',
          dark: '#0E1B36',
        },
        secondary: {
          DEFAULT: '#B22234', // Red from logo
          light: '#D13545',
          dark: '#8E1B29',
        },
        accent: {
          DEFAULT: '#607D8B', // Blue-gray
          light: '#90A4AE',
          dark: '#455A64',
        },
        background: {
          DEFAULT: '#F5F7FA',
          dark: '#E1E7ED',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Montserrat', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'card-hover': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [],
}
