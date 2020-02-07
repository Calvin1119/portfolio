import React from "react"
import 'typeface-roboto'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'

export default class TextTile extends React.Component {
  render() {
    return (
      <Card>
        <CardContent>
          {this.props.children}
        </CardContent>
      </Card>
    )
  }
}
