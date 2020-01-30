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
    title: 'Rishi: Embedded Modules',
    desc: `Many people find scientific papers hard to read, especially if they aren\'t used to reading them.
           This project\'s goal was to remedy this by adding interactive elements to the writing.
           We took a psychology paper on executive function, and added simulations of the experiments that the paper was based on.
           This concept would later be expanded on in the SeeVita project.`,
    img: [image, image, image],
    links: {
      source: 'url',
      demo: 'url',
    },
  },
  {
    title: 'Rishi: SeeVita Homepage',
    desc: `This was my first foray into traditional web design. This was just a simple website for the SeeVita project, but I'm very happy with how it turned out.
           In particular, the back and forth process of making changes, seeing how the changes were recieved by the client, and moving forward was quite a valueable experience.`,
    img: [image, image, image],
    links: {
      source: 'url',
      demo: 'url',
    },
  },
  {
    title: 'Rishi: SeeVita',
    desc: `This is the big brother of the Embedded Modules project we did earlier. The goal here was to make the earlier approach more generalizable so we could
           create an authoring tool for interactive papers. The embedded experiment simulations were brought back, and an additional focus on interactive data
           visualization was added.`,
    img: [image, image, image],
    links: {
      source: 'url',
      demo: 'url',
    },
  },
  {
    title: 'Digital Linguistics: DaFoDiL',
    desc: `Being a double major, you always jump at the opportunity to use both majors at the same time. The Digital Linguistics project has provided me many
           opportunities to do exactly that. The "Data Format for Digital Linguistics" is a standardized way for linguists to store information about languages,
           which is helpful for many of the other projects that Digital Linguistics is working on. This project taught me a lot about schema design, and also
           about navigating through big open-source projects like this`,
    img: [image, image, image],
    links: {
      source: 'url',
      demo: 'url',
    },
  },
  {
    title: 'Digital Linguistics: Lotus (IN-PROGRESS)',
    desc: `The Lotus webapp will allow linguists studying any sort of language an easy way to organize and share all of their data, including lexicons,
           phonemic inventories, phonological rules, and much more. Right now the focus is on Algonquian languages because of our partnership with Monica Macaulay
           from the UW-Madison linguistics department, but the goal is for this app to eventually support all sorts of languages from all over the world`,
    img: [image, image, image],
    links: {
      source: 'url',
      demo: 'url',
    },
  },
  {
    title: 'This Portfolio',
    desc: `You're looking at it right now! I'm very used to working with a team or for a client, but making something for your own purposes has its own set of
           required skills. You don't have to follow anyone's expectations or design but your own, which is sometimes freeing and sometimes nerve wracking.
           This website is made in React, using the Material UI library, with Gatsby for the backend.`,
    img: [image, image, image],
    links: {
      source: 'url',
      demo: 'url',
    },
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
    this.setState({open: false, project: null})
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
        <GridList cellHeight={250}>
          {tiles}
        </GridList>
        <ProjectModal open={this.state.open} onClose={this.handleClose} project={this.state.project}/>
      </Page>
    )
  }
}
