import React from "react"
import 'typeface-roboto';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import {
  Button,
  CardActionArea,
  Fab,
  IconButton,
  Link,
} from "gatsby-theme-material-ui";

const pages = [
  ['/', 'Home'],
  ['/about', 'About Me'],
  ['/resume', 'Resume'],
  ['/projects', 'Projects'],
  ['/contact', 'Contact Info'],
]

export default class Navigation extends React.Component {
  render() {
    const buttons = []
    for (let i = 0; i < pages.length; i++) {
      buttons.push(<NavButton key={i} link={pages[i][0]} text={pages[i][1]} current={pages[i][0] === this.props.current}/>);
    }
    return (
      <AppBar position='static'>
        <Toolbar>
          {buttons}
        </Toolbar>
      </AppBar>
    )
  }
}

class NavButton extends React.Component {
  render() {
    return this.props.current ? (
      <Button disabled={true}>
        {this.props.text}
      </Button>
    ) : (
      <Link to={this.props.link}>
        <Button>
          {this.props.text}
        </Button>
      </Link>
    )
  }
}
