export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        // 'xl1440': '1440px', // Custom breakpoint
        // 'L425':'425PX',
        // 'max-L425': {max: '425px'},
        // 'max-M375': {max: '375px'},
        // 'M375':'375px',
        // "S320": "320px",
        'xl-1440': '1440px',  // Extra Large screens (1440px)
        // 'lg-1024': '1024px',  // Large screens (1024px)
        // 'md-768': '768px',    // Medium screens (768px)
        'sm-425': '425px',    // Small screens (425px)
        'xs-375': '375px',    // Extra Small screens (375px)
        'xxs-320': '320px',   // Smallest screens (320px)
        'max-lg-1731':{max:'1731px'},
        'max-lg-1692':{max:'1692px'},
        'max-lg-1529':{max:'1529px'},
        'max-lg-1400':{max:'1400px'},
        'max-lg-1364':{max:'1364px'},
        'max-lg-1392':{max:'1392px'},
        'max-lg-1210':{max:'1210px'},
        'max-lg-1200':{max:'1200px'},
        'max-lg-1150':{max:'1150px'},
        'max-lg-1180':{max:'1180px'},
        'max-lg-1100':{max:'1100px'},
        'max-lg-1024':{max:'1024px'},
        'max-lg-800':{max:'800px'},
        'max-lg-767':{max:'767px'},
        'max-lg-639':{max:'639px'},
        'max-sm-528':{max:'528px'},


        'max-sm-425': { max: '425px' },  // Max-width 425px (for mobile-first design)
        'max-xs-375': { max: '375px' },  // Max-width 375px
        'max-xxs-320': { max: '320px' },  // Max-width 320px
        'max-xl-1440': { max: '1440px' },
        'max-lg':{max:'1024px'}
      },
      fontFamily:{
        judson: "Judson",
        dmsans: "DM Sans"
      }
    },
  },
  plugins: [],
};
