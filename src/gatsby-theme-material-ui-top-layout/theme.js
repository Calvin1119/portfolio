import { createMuiTheme } from "@material-ui/core";
import green from '@material-ui/core/colors/green';

const storage = window.localStorage

console.log(storage.getItem('theme'));

let dark = storage.getItem('theme') === 'dark';

console.log(dark);

const theme = createMuiTheme({
  palette: {
    type: dark ? 'dark' : 'light'
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
