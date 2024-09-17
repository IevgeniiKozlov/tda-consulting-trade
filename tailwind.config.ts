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
        primary: '#C1844D',
        action: '#E67E22',
        'light-gray': '#B4B4B4',
        gray: '#7F8C8D',
        'light-blue': '#3498DB',
        green: '#2ECC71',
      },
      backgroundImage: {
        background:
          'linear-gradient(90deg, rgba(163,197,198,1) 0%, rgba(52,152,219,1) 49%, rgba(44,62,80,1) 100%)',
        background1: 'linear-gradient(135deg, #3498DB 0%, #2C3E50 100%)', // light blue - dark blue gradient
        info: "url('../public/infoblock.png')",
        main: "url('../public/test1.png')",
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
