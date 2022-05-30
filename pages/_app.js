import { AuthProvider } from "../libs/auth.js";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import theme from '../libs/theme'

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
