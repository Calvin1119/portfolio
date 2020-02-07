import { createMuiTheme } from "@material-ui/core";
import green from '@material-ui/core/colors/green';
import red from '@material-ui/core/colors/red';

// if (typeof window !== undefined)
//   var dark = checkDark()
//
// function checkDark() {
//   const storage = window.localStorage
//   return storage.getItem('theme') === 'dark';
// }

let dark = true

const theme = createMuiTheme({
  palette: {
    type: dark ? 'dark' : 'light',
    primary: green,
  },
  overrides: {
    MuiCard: {
      root: {
        height: '100%'
      },
    },
    img: {
      root: {
        width: '100%'
      },
    },
    MuiGrid: {
      container: {
        height: '100%'
      }
    }
  },
});

export default theme;
