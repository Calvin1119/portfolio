import React from "react"
import 'typeface-roboto'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import {
  Link,
} from "gatsby-theme-material-ui";

import Page from '../components/Page.js'
import TextTile from '../components/TextTile.js'

const info = [
  ['Email', 'brockwrob@gmail.com', 'mailto:brockwrob@gmail.com'],
  ['Phone', '608-575-1228', 'tel:1-608-575-1228'],
  ['LinkedIn', 'Brock Wroblewski', 'https://www.linkedin.com/in/brock-wroblewski-751412151/'],
  ['Github', 'Calvin1119', 'https://github.com/Calvin1119'],
]

export default class About extends React.Component {
  render() {
    const cards = []
    for (let i = 0; i < info.length; i++) {
      cards.push(
        <Grid item xs key={i}>
          <Card raised>
            <CardContent>
              <Typography>
                {info[i][0]}
              </Typography>
              <Link to={info[i][2]}>
                {info[i][1]}
              </Link>
            </CardContent>
          </Card>
        </Grid>
      )
    }
    return (
      <Page name='/contact'>
        <Grid container spacing={4}>
          {cards}
        </Grid>
        <Grid container justify='center' style={{paddingTop: 70}}>
          <Grid item xs={9}>
            <TextTile>
              <Typography variant='h4' align='justify' paragraph>
                The best way to contact me is to send me an email at the address above
              </Typography>
              <Typography variant='h4' align='justify' paragraph>
                If you prefer to use a different communication method (Skype, Slack, etc.) let me know in the email and we can set up a time to meet
              </Typography>
              <Typography variant='h4' align='justify' paragraph>
                I'm usually available from 12:00p to 2:00p and 5:00p to 8:00p US-Central time (UTC -6:00), but I'm willing to meet at other times if needed
              </Typography>
            </TextTile>
          </Grid>
        </Grid>
      </Page>
    )
  }
}
