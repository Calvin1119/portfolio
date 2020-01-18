import React from "react"
import 'typeface-roboto';
import Container from '@material-ui/core/Container'
import CssBaseline from '@material-ui/core/CssBaseline'
import {
  Button,
  CardActionArea,
  Fab,
  IconButton,
  Link,
} from "gatsby-theme-material-ui";

import SunIcon from '@material-ui/icons/WbSunny';
import MoonIcon from '@material-ui/icons/Brightness3';

import Navigation from '../components/Navigation.js'

export default class Page extends React.Component {
  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <Navigation current={this.props.name} />
        <Container style={{paddingTop: '40px'}}>
          {this.props.children}
        </Container>
        <ThemeToggle />
      </React.Fragment>
    )
  }
}

class ThemeToggle extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      dark: window.localStorage.getItem('theme') === 'dark',
    }
    this.toggleTheme = this.toggleTheme.bind(this)
  }
  toggleTheme() {
    window.localStorage.setItem('theme', this.state.dark ? 'light' : 'dark')
    window.location.reload()
  }
  render() {
    return (
      <Fab onClick={this.toggleTheme} variant='extended' style={{position: 'absolute', bottom: '5%', right: '5%'}} >
        {this.state.dark ? <MoonIcon style={{marginRight: '10px'}}/> : <SunIcon style={{marginRight: '10px'}}/>} Toggle Theme
      </Fab>
    )
  }
}
