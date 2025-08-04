module.exports = {
  corePlugins: {
    preflight: true,
  },
  content: ['./index.html', './src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        'brand-purple': '#7f5af0',
        'brand-dark': '#16161a',
        'brand-light': '#fffffe',
        'brand-gray': '#94a1b2',
      },
      boxShadow: {
        'volumetric': '0 5px 0 0 #a78bfa, 0 8px 20px 0 rgba(0,0,0,0.3)',
        'volumetric-active': '0 2px 0 0 #a78bfa, 0 4px 10px 0 rgba(0,0,0,0.3)',
      },
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
