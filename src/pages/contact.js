import React from "react"
import 'typeface-roboto'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import {
  Button,
  CardActionArea,
  Fab,
  IconButton,
  Link,
} from "gatsby-theme-material-ui";

import Page from '../components/Page.js'

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
      console.log(info);
      cards.push(
        <Grid item xs>
          <Card key={i} raised>
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
        <Grid container spacing={4} alignItems='center'>
          {cards}
        </Grid>
      </Page>
    )
  }
}
