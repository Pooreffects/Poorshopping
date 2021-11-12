import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  title: {
    marginTop: '3%',
    fontFamily: "'Mochiy Pop One', sans-serif",
    color: 'whitesmoke',
  },
  emptyButton: {
    minWidth: '110px',
    fontWeight: '700',
    borderRadius: '1rem',
    backgroundColor: '#E97451',
    color: 'whitesmoke',
    [theme.breakpoints.down('xs')]: {
      marginBottom: '5px',
    },
    [theme.breakpoints.up('xs')]: {
      marginRight: '20px',
    },
  },
  checkoutButton: {
    minWidth: '110px',
    backgroundColor: '#9483a2',
    color: 'whitesmoke',
    fontWeight: '700', // #ffb74d #311b92
    borderRadius: '1rem',
  },
  link: {
    textDecoration: 'none',
  },
  cardDetails: {
    fontFamily: "'Mochiy Pop One', sans-serif",
    display: 'flex',
    marginTop: '10%',
    width: '100%',
    justifyContent: 'space-between',
  },
  sub: {
    fontFamily: "'Mochiy Pop One', sans-serif",
    color: '#9483a2',
  },
  total: {
    color: 'whitesmoke',
  },
}));
