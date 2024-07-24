/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      colors: {
        'pale-blue': 'hsl(225, 100%, 94%)',
        'bright-blue': 'hsl(245, 75%, 52%)',
        'very-pale-blue': 'hsl(225, 100%, 98%)',
        'desaturated-blue': 'hsl(224, 23%, 55%)',
        'dark-blue': 'hsl(223, 47%, 23%)',
      },
      backgroundImage: {
        desktop: "url('../images/pattern-background-desktop.svg')",
        mobile: "url('../images/pattern-background-mobile.svg')",
      },
      boxShadow: {
        box: '0px 40px 40px -20px rgba(13, 48, 189, 0.15)',
        button: '0px 20px 20px 0px rgba(56, 42, 225, 0.19)',
      },
    },
  },
  plugins: [],
};
