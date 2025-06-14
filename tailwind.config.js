/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
     "./src/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
       colors: {
        'absensi-primary': 'var(--color-absensi-primary)',
        'absensi-secondary': 'var(--color-absensi-secondary)',
        'absensi-tertiary': 'var(--color-absensi-tertiary)',
        'primary': 'var(--color-primary)',
        'secondary': 'var(--color-secondary)',
        'tertiary': 'var(--color-tertiary)',
        'error': 'var(--color-error)',
      },
      fontFamily: {
        poppins: ['var(--font-poppins)', 'sans-serif'],
      },
      keyframes: {
        'slide-in': {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'slide-in': 'slide-in 0.3s ease-out forwards',
      }
    },
  },
  plugins: [],
}

