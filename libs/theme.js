import { red } from '@material-ui/core/colors';
import { createTheme } from '@mui/material/styles';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#000B50',
      ligth: "#46F509",
      dark: "#46F509"
    },
    secondary: {
      main: '#E7F509',
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;