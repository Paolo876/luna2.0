import { createTheme } from '@mui/material';

/**
 * Inter
 * Lato
 * Montserrat
 * Questrial
 * Roboto
 * Source Sans Pro
 */


export const theme = createTheme({
    components: {
      MuiCssBaseline: {
        styleOverrides: {
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            fontFamily: 'Inter',
            borderWidth: 2,
            borderRadius: 0,
            letterSpacing: .25,
            ":hover": {
              borderRadius: 0,
              borderWidth: 2,
  
            }
          },
          
        },
      },
    //   MuiLink: {
    //     styleOverrides: {
    //       root: {
    //         textTransform: "uppercase",
    //         textDecoration: "none",
    //         color: "#efebe5"
    //       }
    //     }
    //   },
    //   MuiIconButton: {
    //     styleOverrides: {
    //       root: {
    //         borderRadius: 0
    //       }
    //     }
    //   }
    },
    palette: {
      primary: {
        main: "#45a198",
      },
      secondary: {
        main: '#454ea1',
      },
    //   info: {
    //     main: '#18ecbe',
    //   },
    //   error: {
    //     main: '#f8713f',
    //   },
      success: {
        main: '#4cb074',
      },
      background: {
        // default: 'rgb(38,37,37)',
        // lighter: 'rgba(239,235,229,0.8)',
        // paper: '#24242b',
      },
      text: {
        primary: '#efebe5',
        secondary: 'rgba(239,235,229,0.8)',
        disabled: 'rgba(239,235,229,0.55)',
      },
    },
    typography: {
      fontFamily: 'Source Sans Pro',
      h1: {
        fontFamily: 'Roboto',
        fontSize: "5em",
        fontWeight: 500,
        letterSpacing: 1
      },
      h2: {
        fontFamily: 'Roboto',
        fontSize: "4.5em",
        fontWeight: 700,
        textTransform: 'uppercase',
  
      },
      h3: {
        fontFamily: 'Inter',
        fontSize: "4.25em",
        fontWeight: 400,
        lineHeight: 1.5,
      },
      h4: {
        fontFamily: 'Inter',
        fontSize: "3em",
        letterSpacing: 1,
        fontWeight: 1,
  
      },
      h5: {
        fontFamily: 'Inter',
        fontSize: "2em",
        fontWeight: 400,
        letterSpacing: 1,
      },
      h6: {
        fontSize: "1.5em",
        fontFamily: 'Inter',
        letterSpacing: 2,
      },
      subtitle1: {
        fontWeight: 300,
      },
      subtitle2: {
        fontWeight: 300,
      },
      body1: {
        fontWeight: 400,
        fontSize: "1.1em",
      },
      body2: {
        // fontWeight: 100,
        fontFamily: 'Questrial',

      },
      button: {
        fontFamily: 'Source Sans Pro',
      },
    },
  });