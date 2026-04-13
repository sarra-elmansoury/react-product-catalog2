import React from 'react';
import { Row, Container } from 'react-bootstrap';
import ProductCard from './ProductCard';

const ProductList = ({ products }) => {
  return (
    <Container className="my-4">
      <Row>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Row>
    </Container>
  );
};

export default ProductList;