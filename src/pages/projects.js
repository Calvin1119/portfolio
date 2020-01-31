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

import embedmod1 from '../img/EmbedMod-01.png'
import embedmod2 from '../img/EmbedMod-02.png'
import embedmod3 from '../img/EmbedMod-03.png'

import svhome1 from '../img/SVHome-01.png'
import svhome2 from '../img/SVHome-02.png'
import svhome3 from '../img/SVHome-03.png'
import svhome4 from '../img/SVHome-04.png'
import svhome5 from '../img/SVHome-05.png'
import svhome6 from '../img/SVHome-06.png'

import seevita1 from '../img/SeeVita-01.png'
import seevita2 from '../img/SeeVita-02.png'
import seevita3 from '../img/SeeVita-03.png'
import seevita4 from '../img/SeeVita-04.png'
import seevita5 from '../img/SeeVita-05.png'
import seevita6 from '../img/SeeVita-06.png'
import seevita7 from '../img/SeeVita-07.png'
import seevita8 from '../img/SeeVita-08.png'

import dafodil1 from '../img/Dafodil-01.png'
import dafodil2 from '../img/Dafodil-02.png'
import dafodil3 from '../img/Dafodil-03.png'

import lotus1 from '../img/Lotus-01.png'

const projects = [
  {
    title: 'Rishi: Embedded Modules',
    desc: `Many people find scientific papers hard to read, especially if they aren\'t used to reading them.
           This project\'s goal was to remedy this by adding interactive elements to the writing.
           We took a psychology paper on executive function, and added simulations of the experiments that the paper was based on.
           This concept would later be expanded on in the SeeVita project.`,
    img: [embedmod1, embedmod2, embedmod3],
    links: {
      source: 'https://github.com/metascience-design-lab/scisims/blob/media-switching-brock/demo/index_EFdynamic.html',
      demo: 'demo/index_EFdynamic.html',
    },
  },
  {
    title: 'Rishi: SeeVita Homepage',
    desc: `This was my first foray into traditional web design. This was just a simple website for the SeeVita project, but I'm very happy with how it turned out.
           In particular, the back and forth process of making changes, seeing how the changes were recieved by the client, and moving forward was quite a valueable experience.`,
    img: [svhome1, svhome2, svhome3, svhome4, svhome5, svhome6],
    links: {
      source: 'url',
      demo: 'demo/seevita-home/index.html',
    },
  },
  {
    title: 'Rishi: SeeVita',
    desc: `This is the big brother of the Embedded Modules project we did earlier. The goal here was to make the earlier approach more generalizable so we could
           create an authoring tool for interactive papers. The embedded experiment simulations were brought back, and an additional focus on interactive data
           visualization was added.`,
    img: [seevita1, seevita2, seevita3, seevita4, seevita5, seevita6, seevita7, seevita8],
    links: {
      source: 'url',
      demo: 'demo/svdistil/index.html',
    },
  },
  {
    title: 'Digital Linguistics: DaFoDiL',
    desc: `Being a double major, you always jump at the opportunity to use both majors at the same time. The Digital Linguistics project has provided me many
           opportunities to do exactly that. The "Data Format for Digital Linguistics" is a standardized way for linguists to store information about languages,
           which is helpful for many of the other projects that Digital Linguistics is working on. This project taught me a lot about schema design, and also
           about navigating through big open-source projects like this`,
    img: [dafodil1, dafodil2, dafodil3],
    links: {
      source: 'https://github.com/digitallinguistics/spec',
      docs: 'https://format.digitallinguistics.io/index.html',
      example: 'https://github.com/dwhieb/Algonquian',
    },
  },
  {
    title: 'Digital Linguistics: Lotus (IN-PROGRESS)',
    desc: `The Lotus webapp will allow linguists studying any sort of language an easy way to organize and share all of their data, including lexicons,
           phonemic inventories, phonological rules, and much more. Right now the focus is on Algonquian languages because of our partnership with Monica Macaulay
           from the UW-Madison linguistics department, but the goal is for this app to eventually support all sorts of languages from all over the world.
           This project is just starting out now, but I'll be working on it throughout this semester.`,
    img: [lotus1],
    links: {
      source: 'https://github.com/digitallinguistics/app',
      demo: 'https://app.digitallinguistics.io/',
    },
  },
  {
    title: 'This Portfolio',
    desc: `You're looking at it right now! I'm very used to working with a team or for a client, but making something for your own purposes has its own set of
           required skills. You don't have to follow anyone's expectations or design but your own, which is sometimes freeing and sometimes nerve wracking.
           This website is made in React, using the Material UI library, with Gatsby for the backend.`,
    img: [image, image, image],
    links: {
      source: 'https://github.com/Calvin1119/portfolio',
      demo: '/',
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
