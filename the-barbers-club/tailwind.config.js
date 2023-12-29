/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      'display': ['Oswald'],
      'body': ['"Open Sans"'],
    },
    extend: {
      colors: {
        primary: {
          50: '#eafaf1',
          100: '#d6f5e3',
          200: '#adebc7',
          300: '#84e1ab',
          400: '#5bd78f',
          500: '#32cd73',
          600: '#28a45c',
          700: '#1e7b45',
          800: '#14522e',
          900: '#0a2917',
          950: '#05150b',
        },
        secondary: {
          50: '#f0f5f2',
          100: '#e1eae5',
          200: '#c3d5ca',
          300: '#a5c0b0',
          400: '#87ab96',
          500: '#69967c',
          600: '#547863',
          700: '#3f5a4a',
          800: '#2a3c31',
          900: '#151e19',
          950: '#0a0f0c',
        },
        accent: {
          50: '#fef7e7',
          100: '#fcefcf',
          200: '#f9de9f',
          300: '#f7ce6e',
          400: '#f4bd3e',
          500: '#f1ad0e',
          600: '#c18a0b',
          700: '#916808',
          800: '#604506',
          900: '#302303',
          950: '#181101',
        },
      },
    },
  },
  plugins: [],
}