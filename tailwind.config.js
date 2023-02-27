module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: 'Poppins',
      secondary: 'sans-serif',
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        lg: '0',
      },
    },
    screens: {
      xm:'280px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1170px',
    },
    extend: {
      colors: {
        primary: '#f59e0c',
        accent: {
          primary: '#9C69E2',
          primary_hover: '#9059DB',
        },
        btnColor:"#6BA14B",
      },
      content:{
        'plus': "url('/public/img/download.png')",
      },
      backgroundImage: {
        hero: "url('../src/assets/img/purple-bg.jpg')",
      },
      dropShadow: {
        primary: ' 0px 5px 5px rgba(75, 93, 104, 0.1)',
      },
    },
  },
  plugins: [],
};
