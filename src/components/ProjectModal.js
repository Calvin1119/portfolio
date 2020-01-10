import React from "react"
import 'typeface-roboto';
import Grid from '@material-ui/core/Grid'
import Modal from '@material-ui/core/Modal'
import Paper from '@material-ui/core/Paper'
import {
  Button,
  CardActionArea,
  Fab,
  IconButton,
  Link,
} from "gatsby-theme-material-ui";

export default class ProjectModal extends React.Component {
  render() {
    return (
      <Modal open={this.props.open} onClose={this.props.onClose}>
        <Grid container style={{height: '100%'}} justify='center' alignItems='center'>
          <Grid item xs={6}>
            <Paper>
              {this.props.project}
              <Button onClick={this.props.onClose}>
                Close
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </Modal>
    )
  }
}
