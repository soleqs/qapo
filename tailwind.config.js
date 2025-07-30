module.exports = {
  corePlugins: {
    preflight: false, // Отключает базовые стили для совместимости
  },
  content: ['./index.html', './src/**/*.{html,js}'],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(40px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        glow: {
          '0%, 100%': { filter: 'drop-shadow(0 0 10px #7f5af0)' },
          '50%': { filter: 'drop-shadow(0 0 30px #7f5af0)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'wiggle': 'wiggle 1s ease-in-out infinite',
      },
    },
  },
};
