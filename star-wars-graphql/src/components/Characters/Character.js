import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const Character = (props) => {
  return (
    <Card>
      <CardContent>
      <Typography variant="headline" component="h2" color="textSecondary">
        {props.character.name}
      </Typography>
      <Typography color="textSecondary">
        {props.character.homeworld.name}
      </Typography>
      </CardContent>
    </Card>
  );
}
export default Character;