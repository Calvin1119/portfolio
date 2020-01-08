import React from "react"
import 'typeface-roboto';
import AppBar from '@material-ui/core/AppBar'
import CssBaseline from '@material-ui/core/CssBaseline'
import {
  Button,
  CardActionArea,
  Fab,
  IconButton,
  Link,
} from "gatsby-theme-material-ui";

export default () => <App />

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <AppBar>
          App text
        </AppBar>
        <Button>
          Button Text
        </Button>
        text
      </React.Fragment>
    )
  }
}
