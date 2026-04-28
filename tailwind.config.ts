import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'yale-blue': {
          '50':  '#e8f2fc',
          '100': '#d2e5f9',
          '200': '#a4ccf4',
          '300': '#77b2ee',
          '400': '#4999e9',
          '500': '#1c7fe3',
          '600': '#1666b6',
          '700': '#114c88',
          '800': '#0b335b',
          '900': '#06192d',
          '950': '#041220',
        },
        'celadon': {
          '50':  '#edf7ef',
          '100': '#dbf0de',
          '200': '#b7e1bd',
          '300': '#93d29d',
          '400': '#6fc37c',
          '500': '#4bb45b',
          '600': '#3c9049',
          '700': '#2d6c37',
          '800': '#1e4824',
          '900': '#0f2412',
          '950': '#0b190d',
        },
        'jungle-green': {
          '50':  '#eff6f0',
          '100': '#deede2',
          '200': '#bddbc5',
          '300': '#9cc9a7',
          '400': '#7bb78a',
          '500': '#5ba46d',
          '600': '#488457',
          '700': '#366341',
          '800': '#24422c',
          '900': '#122116',
          '950': '#0d170f',
        },
        'emerald': {
          '50':  '#eef6f0',
          '100': '#ddeee0',
          '200': '#bbddc2',
          '300': '#99cca3',
          '400': '#77bb85',
          '500': '#55aa66',
          '600': '#448852',
          '700': '#33663d',
          '800': '#224429',
          '900': '#112214',
          '950': '#0c180e',
        },
        'fresh-sky': {
          '50':  '#e9f6fc',
          '100': '#d3ecf8',
          '200': '#a6daf2',
          '300': '#7ac7eb',
          '400': '#4eb5e4',
          '500': '#21a2de',
          '600': '#1b82b1',
          '700': '#146185',
          '800': '#0d4159',
          '900': '#07202c',
          '950': '#05171f',
        },
      },
      fontFamily: {
        sans: ['var(--font-plus-jakarta)', 'Plus Jakarta Sans', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.5s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
