import React from 'react';
import { Container, Typography, Button, Grid } from '@material-ui/core';
import cartStyles from './cartStyles';
import CartItem from './CartItem/CartItem';

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
            <CartItem item={item} />
          </Grid>
        ))}
      </Grid>
      <div className={classes.cardDetails}>
        <Typography variant="h5" className={classes.sub}>
          Subtotal:{' '}
          <span className={classes.total}>
            {cart.subtotal.formatted_with_symbol}
          </span>
        </Typography>
        <div>
          <Button className={classes.emptyButton} size="small" type="button">
            Empty Cart
          </Button>
          <Button className={classes.checkoutButton} size="small" type="button">
            Checkout
          </Button>
        </div>
      </div>
    </>
  );

  if (!cart.line_items) return 'Loading...'; // Create a Loading component if you wannna get fancy!

  return (
    <Container>
      <div className={classes.toolbar} />
      <Typography className={classes.title} variant="h4">
        Your Shopping Cart
      </Typography>
      <div className={classes.toolbar} />
      {!cart.line_items ? ShowEmptyCart() : ShowFilledCart()}
    </Container>
  );
};

export default Cart;
