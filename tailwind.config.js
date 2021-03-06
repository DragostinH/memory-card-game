module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'cards': 'repeat(auto-fit, minmax(75px, 1fr))',
        'score': 'repeat(auto-fit, minmax(100px, 1fr))',
      },
      keyframes: {
        popin: {
          '0%': { transform: 'scale(0)' },
          '10%': { transform: 'scale(0.1)' },
          '20%': { transform: 'scale(0.2)' },
          '30%': { transform: 'scale(0.3)' },
          '40%': { transform: 'scale(0.4)' },
          '50%': { transform: 'scale(0.5)' },
          '60%': { transform: 'scale(0.6)' },
          '100%': { transform: 'rotate(0.75)' },
        },
      },
      animation: {
        'popping-in': 'popin 0.4s ease-out 1',
      },
    },
    fontFamily: {
      display: ['Source Serif Pro', 'Georgia', 'serif'],
      body: ['Synonym', 'system-ui', 'sans-serif'],
    },
    colors: {
      primary: {
        50: '#f8fafc',
        100: '#f1f5f9',
        200: '#e2e8f0',
        300: '#cbd5e1',
        400: '#94a3b8',
        500: '#64748b',
        600: '#475569',
        700: '#334155',
        800: '#1e293b',
        900: '#0f172a',
      },
      secondary: {
        50: '#ecfdf5',
        100: '#d1fae5',
        200: '#a7f3d0',
        300: '#6ee7b7',
        400: '#34d399',
        500: '#10b981',
        600: '#059669',
        700: '#047857',
        800: '#065f46',
        900: '#064e3b',
      },
      danger: {
        50: '#faf0f0',
        100: '#fde8e8',
        200: '#fbcbcb',
        300: '#f99f9f',
        400: '#f57c7c',
        500: '#f05252',
        600: '#ec3636',
        700: '#e71f1f',
        800: '#dd0d0d',
        900: '#c80b0b',
      },
      success: {
        50: '#f9f9f9',
        100: '#f5f5f5',
        200: '#f0f0f0',
        300: '#e6e6e6',
        400: '#d9d9d9',
        500: '#c8c8c8',
        600: '#b3b3b3',
        700: '#9e9e9e',
        800: '#8a8a8a',
        900: '#757575',
      },
    },
  },
}