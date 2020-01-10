import React from "react"
import 'typeface-roboto'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import GridListTileBar from '@material-ui/core/GridListTileBar'
import {
  Button,
  CardActionArea,
  Fab,
  IconButton,
  Link,
} from "gatsby-theme-material-ui";

import Page from '../components/Page.js'
import ProjectModal from '../components/ProjectModal.js'

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
      open: false,
      project: null,
    }
    this.handleOpen = this.handleOpen.bind(this)
    this.handleClose = this.handleClose.bind(this)
  }
  handleOpen(proj) {
    this.setState({open: true, project: proj})
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
              <Button onClick={() => this.handleOpen(projects[i].title)}>
                More
              </Button>
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
        <ProjectModal open={this.state.open} onClose={this.handleClose} project={this.state.project} />
      </Page>
    )
  }
}
