import { nextui } from '@nextui-org/react'
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
        },
      },
      screens: {
        xs: '390px',
        // => @media (min-width: 390px) { ... }
      },
      fontFamily: {
        sans: ['var(--font-sans)'],
        russo: ['var(--font-russo)'],
      },
      colors: {
        black: '#0a0908',
        'light-black': '#293037',
        'light-gray': '#948982',
        primary: '#C1844D',
        gray: '#B4B4B4',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        main: "url('../public/background.png')",
        noise: "url('../public/noise.png')",
        worldmap: "url('../public/worldmap.png')",
        contact: "url('../public/contact.png')",
      },
    },
  },
  darkMode: 'class',
  plugins: [nextui()],
}
export default config
