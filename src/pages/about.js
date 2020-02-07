import React from "react"
import 'typeface-roboto'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import Typography from '@material-ui/core/Typography'

import Page from '../components/Page.js'
import TextTile from '../components/TextTile.js'

import image from '../img/Headshot_BascomSmile.jpg'
import crosscountry from '../img/CrossCountry.jpg'
import eagleproject from '../img/EagleProject.jpg'
import first2 from '../img/First-02.jpg'
import bluenotes from '../img/BlueNotes.jpg'
import band from '../img/Band.jpg'
import bascom from '../img/Bascom.jpg'

export default class About extends React.Component {
  render() {
    return (
      <Page name='/about'>
        <GridList  spacing={50}>
          <GridListTile rows={2}>
            <TextTile>
              <Typography variant='h3' paragraph>
                About Me:
              </Typography>
              <Typography variant='body1' paragraph>
                I grew up in McFarland, a small town close to Madison.
                I dabbled in a lot of activities throughout my childhood; at different points I wrote for the school newspaper, ran cross country, and sang in an A Capella group.
                However, the activities that had the most effect on me today were Boy Scouts and FIRST robotics.
              </Typography>
            </TextTile>
          </GridListTile>
          <GridListTile rows={2}>
            <img src={crosscountry} />
          </GridListTile>
          <GridListTile rows={2}>
            <img src={bluenotes} />
          </GridListTile>
          <GridListTile rows={2}>
            <img src={band} />
          </GridListTile>
          <GridListTile rows={2}>
            <img src={eagleproject} />
          </GridListTile>
          <GridListTile rows={2}>
            <TextTile>
              <Typography variant='body1' paragraph>
                The most important experience I had in Boy Scouts was my Eagle Scout project.
                It was the first time that I had organized in that sort of large scale project,
                and it really gave me some good experience with the ins and outs of working with large groups of people to bring a goal to fruition.
              </Typography>
              <Typography variant='body1' paragraph>
                My Eagle project was a trail renovation for a prairie near my hometown. I was in charge of the whole process, including dealing with
                land disputes, budgeting for material costs, and coordinating all the volunteers to actually cut and haul away the brush. The only way
                to gain leadership experience is to go out and lead, and the scouting program is certainly a great way to get those skills early on in life.
              </Typography>
            </TextTile>
          </GridListTile>
          <GridListTile rows={2}>
            <TextTile>
              <Typography variant='body1' paragraph>
                FIRST robotics is important to me because it was the first time that I worked on a programming project with a large group of people.
                Much like the Eagle project, this required us to figure out a good way to coordinate many people working on the same codebase at the same time,
                and the skills and tools I learned from that have been very useful in the intervening years.
              </Typography>
              <Typography variant='body1' paragraph>
                FIRST Robotics is both a design competition and a competitive sport. Alliances of three robots compete against each other
                to score points and advance in a tournament bracket. Knowing what your opponents and teammates can do is very useful for strategizing, so we developed
                a web-app that allowed team members to quickly log useful stats about a robot's performance in a match,
                allowing us to be more informed when it came time to make decisions about who to form alliances with.
              </Typography>
            </TextTile>
          </GridListTile>
          <GridListTile rows={2}>
            <img src={first2} />
          </GridListTile>
          <GridListTile rows={2}>
            <img src={bascom} />
          </GridListTile>
          <GridListTile rows={2}>
            <TextTile>
              <Typography variant='body1' paragraph>
                Now that I'm at college, I've continued to gain new experiences and learn new skills.
                I've worked on a few solo projects, assisted a grad student with his business venture, learned real time systems with an autonomous car racing team,
                and helped with the restoration efforts for Native American languages.
              </Typography>
              <Typography variant='body1' paragraph>
                After graduation, I hope to join the workforce immediately.
                Which field I end up in doesn't matter as much to me. Ideally I would end up using both my Computer Science and Linguistics degrees, but if I end up using
                only one or the other that's fine as well.
                What I enjoy more than anything else is finding solutions to problems.
                If you have problems that need to be solved, be sure to let me know.
              </Typography>
            </TextTile>
          </GridListTile>
        </GridList>
      </Page>
    )
  }
}
