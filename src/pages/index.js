import React from "react"
import 'typeface-roboto'
import Grid from '@material-ui/core/Grid'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import Typography from '@material-ui/core/Typography'
import {
  Button,
  CardActionArea,
  Fab,
  IconButton,
  Link,
} from "gatsby-theme-material-ui";

import Page from '../components/Page.js'

import image from '../img/Headshot_BascomSmile.jpg'

export default class Home extends React.Component {
  render() {
    return (
      <Page name='/'>
        <Grid container spacing={10}>
          <Grid item xs={6}>
            <GridList cols={1}>
              <GridListTile rows={2}>
                <img src={image} />
              </GridListTile>
              <GridListTile rows={2}>
                <img src={image} />
              </GridListTile>
            </GridList>
          </Grid>
          <Grid item xs={6}>
            <Typography variant='h1' align='center'>
              Welcome!
            </Typography>
            <Typography variant='body1'>
              Thank you for taking the time to visit my site. I'm Brock Wroblewski.
              I'm a student at the University of Wisconsin - Madison studying Computer Science and Linguistics.
              
            </Typography>
          </Grid>
        </Grid>
      </Page>
    )
  }
}
