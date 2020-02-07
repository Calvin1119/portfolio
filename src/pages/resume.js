import React from "react"
import 'typeface-roboto'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import {
  Button,
} from "gatsby-theme-material-ui";

import Page from '../components/Page.js'

export default class Resume extends React.Component {
  render() {
    return (
      <Page name='/resume'>
        <Grid container spacing={4}>
          <Grid item xs={6}>
            <Card raised>
              <CardContent>
                <Typography variant='h3'>
                  Education:
                </Typography>
                <Typography variant='h4' align='right'>
                  University of Wisconsin - Madison
                </Typography>
                <Typography variant='subtitle1' align='right'>
                   (2017-Present)
                </Typography>
                <Typography variant='body1'>
                  <ul>
                    <li>Computer Science Major</li>
                    <li>Linguistics Major</li>
                    <li>Deans List 4 Semesters</li>
                  </ul>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Card raised>
              <CardContent>
                <Typography variant='h3'>
                  Languages/Skills:
                </Typography>
                <Typography variant='body1'>
                  <ul>
                    <li>Java</li>
                    <li>Python</li>
                    <li>JavaScript</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>C</li>
                    <li>C++</li>
                    <li>React</li>
                    <li>ROS</li>
                    <li>CI/CD</li>
                    <li>Git</li>
                    <li>Agile Development</li>
                  </ul>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card raised>
              <CardContent>
                <Typography variant='h5' paragraph>
                  Rishi Publishing:
                </Typography>
                <Typography variant='body1' paragraph>
                  Prototyped/designed several web apps for interactive scientific paper publishing
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card raised>
              <CardContent>
                <Typography variant='h5' paragraph>
                  Digital Linguistics:
                </Typography>
                <Typography variant='body1' paragraph>
                  Designed/maintained a specification for the digital storage of linguistic data with a small team
                </Typography>
                <Typography variant='body1' paragraph>
                  Built an open-source frontend application to allow linguists to easily store/analyze data on endangered languages (IN-PROGRESS)
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card raised>
              <CardContent>
                <Typography variant='h5' paragraph>
                  Wisconsin Autonomous:
                </Typography>
                <Typography variant='body1' paragraph>
                  Collaborated with a large team to build an autonomously driving go-cart, mainly focusing on the real time systems pipeline
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Button style={{top: 25, float: 'right'}}>
          Download Paper Version
        </Button>
      </Page>
    )
  }
}
