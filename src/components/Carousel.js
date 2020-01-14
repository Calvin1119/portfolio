import React from "react"
import { styled } from '@material-ui/core/styles';
import CardMedia from '@material-ui/core/CardMedia'
import 'typeface-roboto';
import {
  Button,
  CardActionArea,
  Fab,
  IconButton,
  Link,
} from "gatsby-theme-material-ui";

import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

const AspectCardMedia = styled(CardMedia)({
  height: 0,
  paddingTop: '56%'
})

const CarouselButton = styled(IconButton)({
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)'
})

export default class Carousel extends React.Component {
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
