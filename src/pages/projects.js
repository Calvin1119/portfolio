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
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a tellus orci. Donec nisi mi, posuere a dui vitae, rhoncus luctus velit. Etiam interdum laoreet est, eu fermentum purus scelerisque sed. Proin ac erat sollicitudin quam scelerisque imperdiet non ut diam. Nullam at eros ex. Curabitur id dignissim diam. Quisque vel congue nunc, sed mattis mi. Curabitur consectetur pretium condimentum. Sed varius consequat dui, at iaculis nunc pretium a. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tempus lorem leo, vestibulum pellentesque felis congue in. Quisque nec elit sit amet orci vulputate sagittis.',
    img: [image, image, image],
    link: 'http://www.google.com',
  },
  {
    title: 'p2',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a tellus orci. Donec nisi mi, posuere a dui vitae, rhoncus luctus velit. Etiam interdum laoreet est, eu fermentum purus scelerisque sed. Proin ac erat sollicitudin quam scelerisque imperdiet non ut diam. Nullam at eros ex. Curabitur id dignissim diam. Quisque vel congue nunc, sed mattis mi. Curabitur consectetur pretium condimentum. Sed varius consequat dui, at iaculis nunc pretium a. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tempus lorem leo, vestibulum pellentesque felis congue in. Quisque nec elit sit amet orci vulputate sagittis.',
    img: [image, image, image],
    link: 'google.com',
  },
  {
    title: 'p3',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a tellus orci. Donec nisi mi, posuere a dui vitae, rhoncus luctus velit. Etiam interdum laoreet est, eu fermentum purus scelerisque sed. Proin ac erat sollicitudin quam scelerisque imperdiet non ut diam. Nullam at eros ex. Curabitur id dignissim diam. Quisque vel congue nunc, sed mattis mi. Curabitur consectetur pretium condimentum. Sed varius consequat dui, at iaculis nunc pretium a. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tempus lorem leo, vestibulum pellentesque felis congue in. Quisque nec elit sit amet orci vulputate sagittis.',
    img: [image, image, image],
    link: 'google.com',
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
          <img src={projects[i].img[0]} />
          <GridListTileBar
            title={projects[i].title}
            subtitle={projects[i].desc}
            actionIcon={
              <Button onClick={() => this.handleOpen(projects[i])}>
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
        <ProjectModal open={this.state.open} onClose={this.handleClose} project={this.state.project}/>
      </Page>
    )
  }
}
