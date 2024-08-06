/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    borderRadius:{
      '4xl': '4rem'
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
    },
  },
  plugins: [],
}

