import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    background: theme.palette.background.default,
  },
  root: {
    flexGrow: 1,
  },
}));
