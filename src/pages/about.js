import React from "react"
import 'typeface-roboto'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import Typography from '@material-ui/core/Typography'
import {
  Button,
  CardActionArea,
  Fab,
  IconButton,
  Link,
} from "gatsby-theme-material-ui";

import Page from '../components/Page.js'

import image from '../img/Headshot_BascomSmile.jpg'

export default class About extends React.Component {
  render() {
    return (
      <Page name='/about'>
        <GridList>
          <GridListTile rows={2}>
            <Typography variant='h3'>
              About Me:
            </Typography>
            <Typography variant='body1' paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a tellus orci. Donec nisi mi, posuere a dui vitae, rhoncus luctus velit. Etiam interdum laoreet est, eu fermentum purus scelerisque sed. Proin ac erat sollicitudin quam scelerisque imperdiet non ut diam. Nullam at eros ex. Curabitur id dignissim diam. Quisque vel congue nunc, sed mattis mi. Curabitur consectetur pretium condimentum. Sed varius consequat dui, at iaculis nunc pretium a. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tempus lorem leo, vestibulum pellentesque felis congue in. Quisque nec elit sit amet orci vulputate sagittis.
            </Typography>
          </GridListTile>
          <GridListTile rows={2}>
            <img src={image} />
          </GridListTile>
          <GridListTile rows={2}>
            <img src={image} />
          </GridListTile>
          <GridListTile rows={2}>
            <Typography variant='body2' paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a tellus orci. Donec nisi mi, posuere a dui vitae, rhoncus luctus velit. Etiam interdum laoreet est, eu fermentum purus scelerisque sed. Proin ac erat sollicitudin quam scelerisque imperdiet non ut diam. Nullam at eros ex. Curabitur id dignissim diam. Quisque vel congue nunc, sed mattis mi. Curabitur consectetur pretium condimentum. Sed varius consequat dui, at iaculis nunc pretium a. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tempus lorem leo, vestibulum pellentesque felis congue in. Quisque nec elit sit amet orci vulputate sagittis.
            </Typography>
            <Typography variant='body1' paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a tellus orci. Donec nisi mi, posuere a dui vitae, rhoncus luctus velit. Etiam interdum laoreet est, eu fermentum purus scelerisque sed. Proin ac erat sollicitudin quam scelerisque imperdiet non ut diam. Nullam at eros ex. Curabitur id dignissim diam. Quisque vel congue nunc, sed mattis mi. Curabitur consectetur pretium condimentum. Sed varius consequat dui, at iaculis nunc pretium a. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tempus lorem leo, vestibulum pellentesque felis congue in. Quisque nec elit sit amet orci vulputate sagittis.
            </Typography>
          </GridListTile>
        </GridList>
      </Page>
    )
  }
}
