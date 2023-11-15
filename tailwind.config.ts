const defaultTheme = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin');

const {
  colorPalette,
  customPalette,
  fontStyles,
} = require('./predefinedStyles');
const desktopGridWidth = '944px';
const mobileWidth = '500px';
const mainWidth = '720px';

module.exports = {
  mode: 'jit',
  content: ['./src/**/*.tsx'],
  theme: {
    screens: {
      mobile: mobileWidth,
      ...defaultTheme.screens,
    },
    extend: {
      fontFamily: {
        sans: ['Pretendard', ...defaultTheme.fontFamily.sans],
      },
      colors: { ...colorPalette },
      gridTemplateColumns: {
        15: 'repeat(15, minmax(0, 1fr))',
      },
      minWidth: {
        'desktop-grid': desktopGridWidth,
        main: mainWidth,
      },
      maxWidth: {
        'desktop-grid': desktopGridWidth,
        mobile: mobileWidth,
        main: mainWidth,
      },
      width: {
        'desktop-grid': desktopGridWidth,
      },
      boxShadow: {
        s: '0px 2px 8px rgba(0, 0, 0, 0.08)',
        menu: '0px 1px 0px rgba(0, 0, 0, 0.08), 0px 2px 6px rgba(0, 0, 0, 0.16)',
      },
      keyframes: {
        slideUp: {
          '0%': {
            opacity: '0',
            transform: 'translate(-50%, 100%)',
          },
          '100%': {
            opacity: '1',
            transform: 'translate(-50%, -50%)',
          },
        },
        slideDown: {
          '0%': {
            opacity: '1',
            transform: 'translate(-50%, -50%)',
          },
          '100%': {
            opacity: '0',
            transform: 'translate(-50%, 100%)',
          },
        },
        slideLeft: {
          '0%': {
            transform: 'translateX(0%)',
          },
        },
        slideLeftToRight: {
          '0%': {
            transform: 'translateX(-100%)',
          },
        },
        changeBgColor: {
          '0%': {
            backgroundColor: '#F2F0FC',
          },
          '70%': {
            backgroundColor: '#F2F0FC',
          },
          '100%': {
            backgroundColor: 'white',
          },
        },
        downUp: {
          '0%': { transform: 'translate(30%, 0)', opacity: 0 },
          '100%': { transform: 'translate(0, 0)', opacity: 1 },
        },
      },
      animation: {
        slideUp: 'slideUp 0.2s ease-in-out',
        slideDown: 'slideDown 0.2s ease-in-out',
        slideLeftToRight: 'slideLeftToRight 1s ease-in-out',
        backgroundHighlight: 'changeBgColor 5s ease',
        dropShadow: {
          tooltip: [
            '0 1px 8px rgba(0, 0, 0, 0.16)',
            '0 1px 0 rgba(0, 0, 0, 0.08)',
          ],
        },
      },
    },
    plugins: [
      require('@tailwindcss/line-clamp'),
      require('tailwind-scrollbar-hide'),
      plugin(({ addComponents }: any) => {
        addComponents({
          ...customPalette,
          ...fontStyles,
          '.whitespace-pre-wrap': { whiteSpace: 'pre-wrap' },
          '.break-all': { wordBreak: 'break-all' },
          '.keep-all': { wordBreak: 'keep-all' },
          '.pause': { animationPlayState: 'paused' },
          '.text-ellipsis-1': {
            display: '-webkit-box',
            wordBreak: 'break-word',
            wordWrap: 'break-word',
            '-webkit-line-clamp': '1',
            '-webkit-box-orient': 'vertical',
          },
          '.text-ellipsis-2': {
            display: '-webkit-box',
            wordBreak: 'break-word',
            wordWrap: 'break-word',
            '-webkit-line-clamp': '2',
            '-webkit-box-orient': 'vertical',
          },
          '.text-ellipsis-3': {
            display: '-webkit-box',
            wordBreak: 'break-word',
            wordWrap: 'break-word',
            '-webkit-line-clamp': '3',
            '-webkit-box-orient': 'vertical',
          },
        });
      }),
    ],
  },
};
