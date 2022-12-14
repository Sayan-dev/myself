/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      'sans': ['Poppins'],
      'serif': ['Poppins'],
      'mono': ['Poppins'],
      'display': ['Poppins'],
      'body': ['Poppins'],
    },
    colors: {
      'white': 'var(--white)',
      'black': 'var(--black)',
      'primary': 'var(--primary)',
    },
    extend: {
      fontFamily: {
        'poppins': 'var(--poppins)',
      },
      colors: {
        'faded': 'var(--faded)',
        'light': 'var(--light)',
        'transparent': 'transparent',
        'dark': 'var(--background-dark)',
        'dark-grey': 'var(--dark-grey)',
        'dark-grey-2': 'var(--dark-grey-2)',
        'dark-line': 'var(--dark-line)',
        'faded-dark': 'var(--faded-dark)',
        'light-grey': 'var(--light-grey)',
        'faded-black': 'var(--faded-black)',
        'faded-blue': 'var(--faded-blue)',
        'background-light': 'var(--background-light)',
        'background-dark': 'var(--background-dark)',
        'primary-2': 'var(--primary-2)',
        'red': 'var(--red)',
        'green': 'var(--green)',
      },
      backgroundImage: {
        'review-card': 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%)',
        'review-card-closed': 'linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, #000000 100%)',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',

      },
      boxShadow: {
        'skill-bubble': '0 4px 50px 0 var(--faded-black)',
      }
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
