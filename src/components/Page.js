import React from "react"
import 'typeface-roboto';
import CssBaseline from '@material-ui/core/CssBaseline'
import {
  Button,
  CardActionArea,
  Fab,
  IconButton,
  Link,
} from "gatsby-theme-material-ui";

import Navigation from '../components/Navigation.js'

export default class Page extends React.Component {
  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <Navigation current={this.props.name} />
        {this.props.children}
      </React.Fragment>
    )
  }
}
