module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'display': ['"Red Hat Display"'],
    },
    extend: {
      height: {
        '75vh': "75vh",
        '90vh': "90vh"
      },
      zIndex: {
        '-10': '-10',
      },
      colors: { 
        baseGreen: {
          50: "#415E56",
          75: "#0C6C44",
          100: "#00402E",
          125: "#4B4F51"
        },
        baseRed: {
          25: "rgba(250, 86, 82, 0.15)",
          50: "#FA5652",
          75: "#F44A45",
          100: "#FB4C47"
        },
        redYoutube: "#F44A45",
        background: "#FFF8F8 ",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
