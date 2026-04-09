import React, { useState } from 'react';
import { Row, Container, Button } from 'react-bootstrap';
import ProductCard from './ProductCard';

const ProductList = ({ products }) => {
  const [hideOutOfStock, setHideOutOfStock] = useState(false);

  const filteredProducts = hideOutOfStock
    ? products.filter((product) => product.inStock)
    : products;

  return (
    <Container className="my-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h4>Total Products: {filteredProducts.length}</h4>
        <Button 
          variant="outline-secondary" 
          onClick={() => setHideOutOfStock(!hideOutOfStock)}
        >
          {hideOutOfStock ? "Show All Products" : "Hide Out of Stock"}
        </Button>
      </div>
      <Row>
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Row>
    </Container>
  );
};

export default ProductList;