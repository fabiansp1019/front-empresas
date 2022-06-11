import { red } from '@material-ui/core/colors';
import { createTheme } from '@mui/material/styles';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#bdbdbd',
      ligth: "#46F509",
      dark: "#131314"
    },
    secondary: {
      main: '#8B8D8E',
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontFamily: [
      'Roboto',
    ].join(','),
    fontSize: '1.5rem',
    eeff:{
      fontFamily: [
        'Roboto',
      ].join(','),
      fontSize: '0.8rem',
    }
  },
});

export default theme;