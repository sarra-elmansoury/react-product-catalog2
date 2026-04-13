import React from 'react';
import { Card, Button, Col } from 'react-bootstrap';

const ProductCard = ({ product }) => {
  const handleAddToCart = () => {
    alert("Product has been added to your cart successfully!");
  };

  const handleShowDetails = () => {
    alert(product?.name);
  };

  const cardStyle = {
    backgroundColor: product?.inStock ? '#fff' : '#e9ecef'
  };

  return (
    <Col md={4} className="mb-4">
      <Card className="h-100 shadow-sm" style={cardStyle}>
        <Card.Img 
          variant="top" 
          src={product?.image} 
          style={{ height: '180px', objectFit: 'contain', marginTop: '10px' }} 
        />
        <Card.Body className="text-center">
          <Card.Title className="text-primary fw-bold text-start">{product?.name}</Card.Title>
          <Card.Text className="fs-4 fw-bold text-start">${product?.price}</Card.Text>
          
          {!product?.inStock && (
            <Button variant="secondary" className="w-100 mb-2" disabled>
              Out of Stock
            </Button>
          )}

          <Card.Text className="text-muted text-start">
            {product?.description}
          </Card.Text>

          <div className="d-grid gap-2">
            <Button 
              variant="success" 
              onClick={handleAddToCart}
              disabled={!product?.inStock}
            >
              Add to Cart
            </Button>
            <Button variant="primary" onClick={handleShowDetails}>
              Show Details
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ProductCard;