import { AuthProvider } from "../libs/auth.js";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import theme from '../libs/theme'
// const theme = createTheme({
//   primary: {
//     // light: will be calculated from palette.primary.main,
//     main: '#03053A',
//     // dark: will be calculated from palette.primary.main,
//     // contrastText: will be calculated to contrast with palette.primary.main
//   },
//   secondary: {
//     light: '#0066ff',
//     main: '#E6E30F',
//     // dark: will be calculated from palette.secondary.main,
//     contrastText: '#ffcc00',
//   },
//   // Used by `getContrastText()` to maximize the contrast between
//   // the background and the text.
//   contrastThreshold: 3,
//   // Used by the functions below to shift a color's luminance by approximately
//   // two indexes within its tonal palette.
//   // E.g., shift from Red 500 to Red 300 or Red 700.
//   tonalOffset: 0.2,

//   status: {
//     danger: '#ffcc00',
//   },
// });

function MyApp({ Component, pageProps }) {
  return (
    // <ApolloProvider client={client}>
    
      <AuthProvider>
        <ThemeProvider theme={theme}>
        <Component {...pageProps} />
        </ThemeProvider>
      </AuthProvider>
    // </ApolloProvider>
  );
}

export default MyApp;
