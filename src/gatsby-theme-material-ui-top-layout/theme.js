import { createMuiTheme } from "@material-ui/core";
import green from '@material-ui/core/colors/green';

const theme = createMuiTheme({
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
  },
});

export default theme;
