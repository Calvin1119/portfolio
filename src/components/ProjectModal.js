import React from "react"
import 'typeface-roboto';
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
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

import CloseIcon from '@material-ui/icons/Close';

export default class ProjectModal extends React.Component {
  render() {
    return this.props.project ? (
      <Modal open={this.props.open} onClose={this.props.onClose}>
        <Grid container style={{height: '100%'}} justify='center' alignItems='center'>
          <Grid item xs={6}>
            <Card>
              <CardMedia style={{height: 0, paddingTop: '56%'}} image={this.props.project.img} />
              <CardHeader title={this.props.project.title} action={
                  <IconButton aria-label='close' onClick={this.props.onClose}>
                    <CloseIcon />
                  </IconButton>
                }
              />
              <CardContent>
                <Typography variant='body1'>
                  {this.props.project.desc}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Modal>
    ) : null
  }
}
