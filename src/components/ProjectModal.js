import React from "react"
import { styled } from '@material-ui/core/styles';
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

import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import CloseIcon from '@material-ui/icons/Close';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

export default class ProjectModal extends React.Component {
  render() {
    return this.props.project ? (
      <Modal open={this.props.open} onClose={this.props.onClose}>
        <Grid container style={{height: '100%'}} justify='center' alignItems='center'>
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
                  <Button href={this.props.project.link}>
                    Demo
                  </Button>
                  <Button href={this.props.project.link}>
                    Source
                  </Button>
                </CardActions>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </Modal>
    ) : null
  }
}

const AspectCardMedia = styled(CardMedia)({
  height: 0,
  paddingTop: '56%'
})

const CarouselButton = styled(IconButton)({
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)'
})

class Carousel extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      curr: 0
    }
    this.left = this.left.bind(this)
    this.right=  this.right.bind(this)
  }
  left() {
    this.setState({curr: this.state.curr - 1})
  }
  right() {
    this.setState({curr: this.state.curr + 1})
  }
  render() {
    return !Array.isArray(this.props.images) ? (
      <AspectCardMedia image={this.props.images} />
    ) : (
      <div style={{position: 'relative'}}>
        <AspectCardMedia image={this.props.images[this.state.curr]} />
        <CarouselButton style={{left: 0}} onClick={this.left} disabled={this.state.curr == 0}>
          <ChevronLeftIcon />
        </CarouselButton>
        <CarouselButton style={{right: 0}} onClick={this.right} disabled={this.state.curr == this.props.images.length - 1}>
          <ChevronRightIcon />
        </CarouselButton>
      </div>
    )
  }
}
