import React from "react"
import 'typeface-roboto'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import Typography from '@material-ui/core/Typography'

import Page from '../components/Page.js'

import image from '../img/Headshot_BascomSmile.jpg'

export default class About extends React.Component {
  render() {
    return (
      <Page name='/about'>
        <GridList  spacing={50}>
          <GridListTile rows={2}>
            <Typography variant='h3' paragraph>
              About Me:
            </Typography>
            <Typography variant='body1' paragraph>
              I grew up in McFarland, a small town close to Madison.
              I dabbled in a lot of activities throughout my childhood; at different points I wrote for the school newspaper, ran cross country, and sang in an A Capella group.
              However, the activities that had the most effect on me today were Boy Scouts and FIRST robotics.
            </Typography>
            <Typography variant='body1' paragraph>
              The most important experience I had in Boy Scouts was my Eagle Scout project.
              It was the first time that I had organized in that sort of large scale project,
              and it really gave me some good experience with the ins and outs of working with large groups of people to bring a goal to fruition
            </Typography>
          </GridListTile>
          <GridListTile rows={2}>
            <img src={image} />
          </GridListTile>
          <GridListTile rows={2}>
            <img src={image} />
          </GridListTile>
          <GridListTile rows={2}>
            <Typography variant='body1' paragraph>
              FIRST robotics is important to me because it was the first time that I worked on a programming project with a large group of people.
              Much like the Eagle project, this required us to figure out a good way to coordinate many people working on the same codebase at the same time,
              and the skills and tools I learned from that have been very useful in the intervening years.
            </Typography>
            <Typography variant='body1' paragraph>
              Now that I'm at college, I've continued to gain new experiences and learn new skills.
              I've worked on a few solo projects, assisted a grad student with his business venture, learned real time systems with an autonomous car racing team,
              and helped with the restoration efforts for Native American languages.
            </Typography>
            <Typography variant='body1' paragraph>
              After graduation, I hope to get an industry job.
              I don't care as much about which field I end up in.
              What I enjoy more than anything else is finding solutions to problems.
              If you have problems that need to be solved, be sure to let me know.
            </Typography>
          </GridListTile>
        </GridList>
      </Page>
    )
  }
}
