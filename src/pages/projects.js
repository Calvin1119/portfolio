import React from "react"
import 'typeface-roboto'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import GridListTileBar from '@material-ui/core/GridListTileBar'
import Modal from '@material-ui/core/Modal'
import Paper from '@material-ui/core/Paper'
import {
  Button,
  CardActionArea,
  Fab,
  IconButton,
  Link,
} from "gatsby-theme-material-ui";

import Page from '../components/Page.js'

import image from '../img/Headshot_BascomSmile.jpg'

const projects = [
  {
    title: 'p1',
    desc: 'asdf',
    img: image,
  },
  {
    title: 'p2',
    desc: 'qwer',
    img: image,
  },
  {
    title: 'p3',
    desc: 'zxcv',
    img: image,
  },
]

export default class About extends React.Component {
  constructor() {
    super()
    this.state = {
      open: false
    }
    this.handleOpen = this.handleOpen.bind(this)
    this.handleClose = this.handleClose.bind(this)
  }
  handleOpen() {
    this.setState({open: true})
  }
  handleClose() {
    this.setState({open: false})
  }
  render() {
    const tiles = []
    for (let i = 0; i < projects.length; i++) {
      tiles.push(
        <GridListTile key={i}>
          <img src={projects[i].img} />
          <GridListTileBar
            title={projects[i].title}
            subtitle={projects[i].desc}
            actionIcon={
              <IconButton onClick={this.handleOpen}>
                A
              </IconButton>
            }
          />
        </GridListTile>
      )
    }
    return (
      <Page name='/projects'>
        <GridList>
          {tiles}
        </GridList>
        <Modal open={this.state.open} onClose={this.handleClose}>
          <Paper>
            Stuff
          </Paper>
        </Modal>
      </Page>
    )
  }
}
