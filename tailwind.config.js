/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        // Deep & Rich Palette (Primary Elements)
        'raisin-black': '#1a1423',
        'english-violet': '#3d314a',
        'eggplant': '#684756',
        'chamoisee': '#96705b',
        'beaver': '#ab8476',
        
        // Soft & Elegant Palette (Backgrounds & Accents)
        'lavender-web': '#e7e6f7',
        'pale-purple': '#e3d0d8',
        'rose-quartz': '#aea3b0',
        'mountbatten-pink': '#827081',
        'lavender-web-2': '#c6d2ed',
        
        // Semantic Colors
        primary: {
          50: '#f4f3f7',
          100: '#e7e6f7',
          200: '#d1cef0',
          300: '#b4afe5',
          400: '#9289d7',
          500: '#7a6bc8',
          600: '#6b56b4',
          700: '#5c4899',
          800: '#4d3d7d',
          900: '#3d314a',
          950: '#1a1423',
        },
        secondary: {
          50: '#faf9f8',
          100: '#f2f0ed',
          200: '#e3d0d8',
          300: '#d4b8c3',
          400: '#c5a0ae',
          500: '#b68899',
          600: '#a77084',
          700: '#96705b',
          800: '#684756',
          900: '#3d314a',
        },
        accent: {
          50: '#f9f8f7',
          100: '#f0eeeb',
          200: '#e1ddd6',
          300: '#d2ccc1',
          400: '#c3bbac',
          500: '#b4aa97',
          600: '#ab8476',
          700: '#96705b',
          800: '#684756',
          900: '#3d314a',
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.4s ease-out',
        'slide-in-left': 'slideInLeft 0.6s ease-out',
        'slide-in-right': 'slideInRight 0.6s ease-out',
        'scale-in': 'scaleIn 0.4s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'pulse-soft': 'pulseSoft 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'medium': '0 4px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 30px -5px rgba(0, 0, 0, 0.04)',
        'large': '0 10px 40px -10px rgba(0, 0, 0, 0.15), 0 20px 50px -10px rgba(0, 0, 0, 0.04)',
        'glow': '0 0 20px rgba(122, 107, 200, 0.3)',
      },
    },
  },
  plugins: [],
}