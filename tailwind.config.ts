import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'teal': '#84ceeb',
        'purple': '#8860d0',
        'indigo': '#c1c8e4',
        'cyan': '#5ab9ea',
        'blue': '#5680e9',
        'black': '#191716'
      }
    },
  },
  plugins: [],
}
export default config
