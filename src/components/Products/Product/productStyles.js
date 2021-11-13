import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  itemTitle: {
    fontFamily: "'Mochiy Pop One', sans-serif",
    color: '#9483a2',
    fontWeight: 500,
  },
  price: {
    fontFamily: "'Mochiy Pop One', sans-serif",
    color: '#1b1b1b',
    fontWeight: 500,
  },
  root: {
    maxWidth: '100%',
    height: '100%', // It will fix the align problems of the card itself.
  },
  media: {
    height: 200,
    paddingTop: '56.25%', //16:9
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
  },
}));
