import React from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import useUiRedux from './hooks/useUiRedux';


const ThemeProviderContainer = ({ children }) => {
  const { interface: { primaryColor} } = useUiRedux();
  
  const theme = React.useMemo(
    () =>
    createTheme({
      palette: {
        primary: {
          main: primaryColor,
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
        text: {
          primary: '#efebe5',
          secondary: 'rgba(239,235,229,0.75)',
          disabled: 'rgba(239,235,229,0.6)',
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
    }), [primaryColor]);


  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}

export default ThemeProviderContainer