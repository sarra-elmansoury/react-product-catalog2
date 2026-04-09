import React, { useState } from 'react';
import Header from './components/Header';
import ProductList from './components/ProductList';
import Footer from './components/Footer';
import productsData from './data/products';
import { Container, Button } from 'react-bootstrap';

function App() {
  const [hideOutOfStock, setHideOutOfStock] = useState(false);

  const displayedProducts = hideOutOfStock 
    ? productsData.filter(p => p.inStock) 
    : productsData;

  return (
    <div className="d-flex flex-column min-vh-100 bg-light">
      <Header />
      <main className="py-4">
        <Container className="text-center">
          <h5 className="mb-3">Total Products: {displayedProducts.length}</h5>
          <Button 
            variant="light" 
            className="border shadow-sm mb-4"
            onClick={() => setHideOutOfStock(!hideOutOfStock)}
          >
            {hideOutOfStock ? "Show All Products" : "Hide Out of Stock"}
          </Button>
          <hr />
          <div id="products-section">
            <ProductList products={displayedProducts} />
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  );
}

export default App;