import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  item: {
    fontFamily: "'Mochiy Pop One', sans-serif",
    /* color: '#E97451', */
    color: '#9483a2',
    fontWeight: 500,
  },
  itemPrice: {
    fontFamily: "'Mochiy Pop One', sans-serif",
    color: '#1b1b1b',
  },
  media: {
    height: 420,
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  cartActions: {
    justifyContent: 'space-between',
  },
  buttons: {
    display: 'flex',
    alignItems: 'center',
  },
  removeButton: {
    background: '#E97451',
    color: '#1b1b1b',
    fontWeight: 500,
  },
}));
