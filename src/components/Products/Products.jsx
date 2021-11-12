import React from 'react';
import { Grid } from '@material-ui/core/';
import Product from './Product/Product';
import productsStyles from './productsStyles';

const Products = ({ products, onAddToCart }) => {
  const classes = productsStyles();
  return (
    <div className={classes.container}>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Grid container justifyContent="center" spacing={4}>
          {products.map((product) => {
            return (
              <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                <Product product={product} onAddToCart={onAddToCart} />
              </Grid>
            );
          })}
        </Grid>
      </main>
    </div>
  );
};

export default Products;
