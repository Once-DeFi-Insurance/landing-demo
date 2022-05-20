import { makeStyles } from '@material-ui/core/styles';

const teamStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
    '& > *': {
      position: 'relative',
    }
  },

  teamWrap: {
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(10),
    }
  }
}));

export default teamStyles;
