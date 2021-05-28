import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    padding: theme.spacing(4),
    maxWidth: "1200px",
  },
}));