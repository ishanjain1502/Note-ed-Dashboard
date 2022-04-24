module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    fontFamily:{
      'custom':'Montserrat',
    },
    extend: {
      colors: {
        'trans-col' : 'rgba(255, 255, 255, 0.6)' ,
        'new-green': 'rgba(0,130,173, 0.6)',
        'new-blue': "rgb(0,102,122)",
        'light-green' : '#EBFCFF',

        'custom':'#0091ad'

      },
      fontFamily: {
        'montserrat': ['Montserrat'],
        'lato': ['Lato'],
        'garamond': ['Garamond']
    },
      height: {
        '76': '17rem',
      }
    },
  },
 
  plugins: [
    require('flowbite/plugin')
  ]
}