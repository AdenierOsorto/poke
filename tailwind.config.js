/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      'blue': '#1fb6ff',
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'white': '#ffffff',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
      'is--fire': '#be123c',
      'is--grass': '#15803d',
      'is--poison': '#6d28d9',
      'is--water': '#1d4ed8',
      'is--flying': '#0e7490',
      'is--bug': '#4d7c0f',
      'is--normal': '#3f3f46',
      'is--ground': '#a16207',
      'is--electric': '#facc15',
      'is--fairy': '#f9a8d4',
      'is--psychic': '#f472b6',
      'is--fighting': '#991b1b',
      'is--rock': '#78350f',
      'is--steel': '#a1a1aa',
      'is--ice': '#67e8f9',
      'is--dragon': '#1e40af',
      'is--dark': '#09090b',
    },

    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  },
  safelist: [
    'is--fire',
    'is--grass',
    'is--poison',
    'is--water',
    'is--flying',
    'is--bug',
    'is--normal',
    'is--ground',
    'is--electric',
    'is--fairy',
    'is--psychic',
    'is--fighting',
    'is--rock',
    'is--steel',
    'is--ice',
    'is--dragon',
    'is--dark'
  ],
}