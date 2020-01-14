import React from "react"
import { styled } from '@material-ui/core/styles';
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

export default class About extends React.Component {
  render() {
    return (
      <Page name='/resume'>
        <Grid container spacing={4}>
          <Grid item xs={8}>
            <Card raised>
              <CardContent>
                <Typography variant='h3'>
                  Education:
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card raised>
              <CardContent>
                text
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card raised>
              <CardContent>
                text
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card raised>
              <CardContent>
                text
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card raised>
              <CardContent>
                text
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Card raised>
              <CardContent>
                text
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Card raised>
              <CardContent>
                text
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Button>
          Download Paper Version
        </Button>
      </Page>
    )
  }
}
