import React from 'react'
import classNames from 'classnames';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
  heroUnit: {
    backgroundColor: theme.palette.background.paper,
  },
  heroContent: {
    maxWidth: 600,
    margin: '0 auto',
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
  },
})

const Home = (props) => {
  const {classes} = props;
  return (
  
    <div className={classes.heroUnit}>
      <div className={classes.heroContent}>
        <Typography variant="display3" align="center" color="textPrimary" gutterBottom>
          Welcome!
        </Typography>
        <Typography variant="title" align="center" color="textSecondary" paragraph>
          This site queries a GraphQL implementation of the Star Wars API.
        </Typography>
      </div>
    </div>
)
}
Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);