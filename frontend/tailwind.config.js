/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        typewriter: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
        blink: {
          '0%, 100%': { borderColor: 'transparent' },
          '50%': { borderColor: 'slate' },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
      animation: {
        typewriter: 'typewriter 4s steps(44, end) 1s 1 normal both, blink 500ms steps(44, end) infinite',
        fadeIn: 'fadeIn 2s ease-in-out forwards',
      },
    },
  },
  plugins: [],
}
