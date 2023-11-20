import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    darkmode: 'media',
    colors: {
      'primary': '#ADBAC0',
      'secondary': '#AC005A',
      'tertiary':  'white',
    },
    extend: {
    },
  },
  plugins: [],
}
export default config
