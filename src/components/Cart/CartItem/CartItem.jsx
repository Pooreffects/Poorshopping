import React from 'react';
import {
  Typography,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
} from '@material-ui/core';

import cartItemStyles from './cartItemStyles';

const CartItem = ({ item }) => {
  const classes = cartItemStyles();
  return (
    <Card>
      <CardMedia
        image={item.image.url}
        alt={item.name}
        className={classes.media}
      />
      <CardContent className={classes.cardContent}>
        <Typography className={classes.item} variant="h5">
          {item.name}
        </Typography>
        <Typography className={classes.itemPrice} variant="h6">
          {item.line_total.formatted_with_symbol}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <div className={classes.buttons}>
          <Button type="button" size="small">
            -
          </Button>
          <Typography>{item.quantity}</Typography>
          <Button type="button" size="small">
            +
          </Button>
        </div>
        <Button className={classes.removeButton} type="button">
          Remove
        </Button>
      </CardActions>
    </Card>
  );
};

export default CartItem;
