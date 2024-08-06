/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    borderRadius:{
      '4xl': '4rem',
      '3xl': '3rem',
      '2xl': '2rem',
      'xl': '1rem',
      'lg': '0.5rem',
      'md': '0.3rem',
    },

    extend: {
      height:{
        '1/2': '50%',
        '1/3': '33.33%',
        '2/3': '66.6666%' ,
        '1/4':'25%',
        '3/4':'75%',
      },
      fontFamily:{
        'pop': ['Poppins-light', 'sans-serif'],
        'space': ['Space Rave', 'sans-serif'],
        'kle': ['Klemer'],
        'narnia': ['Narnia'],
      },
      fontSize:{
        'h1': '3rem',
        'h2': '2rem',
        'h3': '1rem',
      },
      boxShadow: {
        'custom':'8px 8px 0 -1px rgba(0, 0, 0, 1)',
        'round':'5px 5px 0 0 rgba(0, 0, 0, 1)',
      },


    },
  },
  plugins: [],
}

