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

export default class Home extends React.Component {
  render() {
    return (
      <Page name='/'>
        <Button>
          Button Text
        </Button>
        text
      </Page>
    )
  }
}
