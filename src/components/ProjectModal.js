import React from "react"
import 'typeface-roboto';
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Grid from '@material-ui/core/Grid'
import Modal from '@material-ui/core/Modal'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import {
  Button,
  CardActionArea,
  Fab,
  IconButton,
  Link,
} from "gatsby-theme-material-ui";

import CloseIcon from '@material-ui/icons/Close';

import Carousel from '../components/Carousel.js'

export default class ProjectModal extends React.Component {
  render() {
    if (!this.props.project)
      return null
    const links = []
    for (let [key, value] of Object.entries(this.props.project.links)) {
      links.push(<Button href={value} target='_blank' key={key}>{key}</Button>)
    }
    return (
      <Modal open={this.props.open} onClose={this.props.onClose}>
        <Grid container justify='center' alignItems='center'>
          <Grid item xs={6}>
            <Card>
              <Carousel images={this.props.project.img}/>
              <CardHeader title={this.props.project.title} action={
                  <IconButton aria-label='close' onClick={this.props.onClose}>
                    <CloseIcon />
                  </IconButton>
                }
              />
              <CardContent>
                <Typography variant='body1'>
                  {this.props.project.desc}
                </Typography>
              </CardContent>
              <CardActionArea>
                <CardActions>
                  {links}
                </CardActions>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </Modal>
    )
  }
}
