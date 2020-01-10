import React from "react"
import 'typeface-roboto';
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

export default class ProjectModal extends React.Component {
  render() {
    return this.props.project ? (
      <Modal open={this.props.open} onClose={this.props.onClose}>
        <Grid container style={{height: '100%'}} justify='center' alignItems='center'>
          <Grid item xs={6} style={{height: '100%', overflow: 'auto'}}>
            <Paper>
              <img src={this.props.project.img} style={{width: '100%'}} />
              <Typography variant='h1'>
                {this.props.project.title}
              </Typography>
              <Typography variant='body'>
                {this.props.project.desc}
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Modal>
    ) : null
  }
}
