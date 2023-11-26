/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
  },
  theme: {
    extend: {
      fontFamily: {
        heading: ['Righteous', 'cursive'],
        subheading: ['Poppins', 'sans'],
        normal: ['Poppins', 'sans'],
      },
      fontSize: {
        'heading': '40px',
        'subheading': '35px',
        'normal': '30px',
      },
      colors: {
        customPink: '#f785ff',
        customYellow: '#ffcf4a',
        soft: '#FEFAE0',
        customOrange: '#fdff9e',
        darkOrange: '#BC6C25',
        lightblue: '#f3dcca',
        customBlue: '#f58936',
      },
      backgroundImage: theme => ({
         'about-background': "url('https://img.freepik.com/premium-photo/silhouette-group-young-traveler-standing-open-arms-watched-star-milky-way-night-sky-top-mountain-they-enjoyed-traveling-was-successful-when-he-reached-summit_623166-407.jpg')",
      }),
      zIndex: {
        '-1': '-1',
      },
      brightness: {
        '50': '.5',
      },
      gradientColorStops: theme => ({
        'light-blue': '#fdff9e',
        'light-turquoise': '#ffec9e', // Define your light turquoise color here
      }),
      linearGradientDirections: {
        't': 'to top',
        'tr': 'to top right',
        // Add more directions as needed
      },
      backgroundGradient: ['hover'],
    },
  },
  variants: {
    extend: {
      backgroundImage: ['hover'],
    },
  },
  plugins: [
    function ({ addUtilities, theme }) {
      const newUtilities = {
        '.gradient-text': {
          background: 'inherit',
          '-webkit-background-clip': 'text',
          'background-clip': 'text',
          color: 'transparent',
        },
        '.about-section::before': { 
          content: '""',
          position: 'absolute',
          top: '0',
          left: '0',
          right: '0',
          bottom: '0',
          backgroundImage: theme('backgroundImage.about-background'),
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          filter: 'brightness(.5)',
          zIndex: '-1',
        },
        '.neon-box': {
          backgroundImage: `linear-gradient(135deg, ${theme('gradientColorStops.light-blue')} 0%, ${theme('gradientColorStops.light-turquoise')} 100%)`,
        },
      }
      addUtilities(newUtilities, ['responsive', 'hover']);
    }
  ],
}
