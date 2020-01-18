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
                    <li>Deans List 3 Semesters</li>
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
                  </ul>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card raised>
              <CardContent>
                <Typography variant='h5'>
                  Rishi Publishing:
                </Typography>
                <Typography variant='body1'>
                  a.sljdfasldas
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card raised>
              <CardContent>
                <Typography variant='h5'>
                  Algonquian Database Project:
                </Typography>
                <Typography variant='body1'>
                  asjdf;asdf;jasjd;f
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card raised>
              <CardContent>
                <Typography variant='h5'>
                  Wisconsin Union:
                </Typography>
                <Typography variant='body1'>
                  ;lskadjf;asjdfas
                </Typography>
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
