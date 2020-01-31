import React from "react"
import 'typeface-roboto'
import Grid from '@material-ui/core/Grid'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import Typography from '@material-ui/core/Typography'

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
            <Typography variant='h6' component='p' paragraph>
              Thank you for taking the time to visit my site. I'm Brock Wroblewski.
              I'm a student at the University of Wisconsin - Madison studying Computer Science and Linguistics.
            </Typography>
            <Typography variant='h6' component='p' paragraph>
              I'm in my third year right now, so my main goal is to gain some real world development experience before I graduate.
              I hope to experience in a wide variety of fields and work environments, so I can have a better idea what to look for when searching for full-time employment.
              Large team, small team, enterprise, startup; I'm willing to try anything at least once.
            </Typography>
            <Typography variant='h6' component='p' paragraph>
              Take a look around!
              You can see my resume and some background about me in the bar above.
              You can also see a bunch of projects I worked on in the past.
              If you like what you see, get in contact with me and we can figure out the project details.
            </Typography>
          </Grid>
        </Grid>
      </Page>
    )
  }
}
