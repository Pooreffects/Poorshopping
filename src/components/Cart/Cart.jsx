import React from 'react';
import { Container, Typography, Button, Grid } from '@material-ui/core';
import cartStyles from './cartStyles';

const Cart = ({ cart }) => {
  const classes = cartStyles();

  const ShowEmptyCart = () => (
    <Typography variant="subtitle1">
      You have no items in your cart, start adding some or just window shop 😄
    </Typography>
  );

  const ShowFilledCart = () => (
    <>
      <Grid container spacing={3}>
        {cart.line_items.map((item) => (
          <Grid item xs={12} sm={4} key={item.id}>
            {/* <CartItem /> */}
            <div>{item.name}</div>
          </Grid>
        ))}
      </Grid>
      <div className={classes.cardDetails}>
        <Typography variant="h4">
          Subtotal: {cart.subtotal.formatted_with_symbol}
        </Typography>
        <div>
          <Button
            className={classes.emptyButton}
            size="large"
            type="button"
            variant="contained"
            color="secondary"
          >
            Empty Cart
          </Button>
          <Button
            className={classes.checkoutButton}
            size="large"
            type="button"
            variant="contained"
            color="primary"
          >
            Checkout
          </Button>
        </div>
      </div>
    </>
  );

  return (
    <Container>
      <div className={classes.toolbar} />
      <Typography className={classes.title} variant="h3">
        Your Shopping Cart
      </Typography>
      {!cart.line_items ? ShowEmptyCart() : ShowFilledCart()}
    </Container>
  );
};

export default Cart;
