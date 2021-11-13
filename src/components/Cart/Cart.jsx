import React from 'react';
import { Container, Typography, Button, Grid } from '@material-ui/core';
import cartStyles from './cartStyles';
import CartItem from './CartItem/CartItem';
import { Link } from 'react-router-dom';

const Cart = ({
  cart,
  handleUpdateCartQty,
  handleEmptyCart,
  handleRemoveFromCart,
}) => {
  const classes = cartStyles();

  const ShowEmptyCart = () => (
    <Typography variant="h4" className={classes.empty}>
      You have no items in your cart, you can just window shop or 🙄
      <Link to="/" style={{ textDecoration: 'none' }}>
        <Button className={classes.emptyLink} variant="h6">
          Add some
        </Button>
      </Link>
    </Typography>
  );

  const ShowFilledCart = () => (
    <>
      <Grid container spacing={3}>
        {cart.line_items.map((item) => (
          <Grid item xs={12} sm={4} key={item.id}>
            <CartItem
              item={item}
              onUpdateCartQty={handleUpdateCartQty}
              onRemoveFromCart={handleRemoveFromCart}
            />
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
          <Button
            className={classes.emptyButton}
            size="small"
            type="button"
            onClick={handleEmptyCart}
          >
            Empty Cart
          </Button>
          <Button
            component={Link}
            to="checkout"
            className={classes.checkoutButton}
            size="small"
            type="button"
          >
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
      {<div className={classes.toolbar} />}
      {!cart.line_items?.length ? <ShowEmptyCart /> : <ShowFilledCart />}
    </Container>
  );
};

export default Cart;
