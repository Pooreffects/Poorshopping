import React from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  MenuItem,
  Menu,
  Typography,
} from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import logo from '../../assets/shopLogo.png';
import navbarStyles from './navbarStyles';
import { styled } from '@material-ui/core/styles';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -1,
    top: 13,
    border: `2px solid #311b92`,
    background: '#311b92',
    padding: '0 4px',
  },
}));

const Navbar = () => {
  const classes = navbarStyles();
  return (
    <>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          <Typography
            variant="h6"
            className={classes.titleContainer}
            color="inherit"
          >
            <img
              src={logo}
              alt="Poorshopping Store"
              height="50px"
              className={classes.image}
            />
            <div className={classes.title}>Poorshopping</div>
          </Typography>
          <div className={classes.grow}></div>
          <div className={classes.button}>
            <IconButton aria-label="Show cart items" color="inherit">
              <StyledBadge badgeContent={2}>
                {/* Icon styles overwritten in Global.css */}
                <ShoppingCart fontSize="large" />
              </StyledBadge>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
