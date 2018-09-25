import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const Ship = (props) => (
  <Card>
    <CardContent>
    <Typography variant="headline" component="h2" color="textSecondary">
      {props.ship.name}
    </Typography>
    <Typography color="textSecondary">
      {props.ship.starshipClass}
    </Typography>
    </CardContent>
  </Card>
);
export default Ship;