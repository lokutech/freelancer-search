import { createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import grey from '@material-ui/core/colors/grey';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: blue[500],
    },
    secondary: {
      light: '#e7698a',
      main: '#E2446D',
      dark: '#9e2f4c',
      contrastText: '#fff'
    },
    background: {
      default: grey[200]
    },
  },
  typography: {
    body2: {
      fontSize: "1rem"
    }
  }
});
export default theme
