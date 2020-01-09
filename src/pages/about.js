import React from "react"
import 'typeface-roboto'
import {
  Button,
  CardActionArea,
  Fab,
  IconButton,
  Link,
} from "gatsby-theme-material-ui";

import Page from '../components/Page.js'

import image from '../img/Headshot_BascomSmile.jpg'

export default class About extends React.Component {
  render() {
    return (
      <Page name='/about'>
        <img src={image} />
      </Page>
    )
  }
}