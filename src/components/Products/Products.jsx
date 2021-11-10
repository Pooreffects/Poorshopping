import React from 'react';
import { Grid } from '@material-ui/core/';
import Product from './Product/Product';

const products = [
  {
    id: 1,
    name: 'Shoes',
    description: 'Running shoes',
    price: '$10',
    image:
      'https://s3.amazonaws.com/nikeinc/assets/101459/Nike_Doernbecher_Freestyle_What_The_AJ1_34994_re2_rectangle_1600.jpg?1614217330',
  },
  {
    id: 2,
    name: 'Macbook M1X',
    description: 'Apple Macbook',
    price: '$1000',
    image:
      'https://www.slashgear.com/wp-content/uploads/2021/10/Apple_Events_-_Special_Event_Stream_-_Apple-77-1280x720.jpg',
  },
];

const Products = () => {
  return (
    <main>
      <Grid container justifyContent="center" spacing={4}>
        {/* To fetch later from an API */}
        {products.map((product) => {
          return (
            <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
              <Product product={product} />
            </Grid>
          );
        })}
      </Grid>
    </main>
  );
};

export default Products;
