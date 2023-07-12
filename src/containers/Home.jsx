import React from 'react';
import { Row, Col, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <Container className="py-3">
      <h1>Redux Case Studies</h1>
      <Row>
        <Col>
          <h3>Todo</h3>
          <Link to="/todo">
            <Button type="button">Example Ganti dari GitHub</Button>
          </Link>
        </Col>
        <Col>
          <h3>Cart</h3>
          <Link to="/cart/products">
            <Button type="button">Example Coba Deploy Ke Vercel</Button>
          </Link>
        </Col>
        <Col>
          <h3>Auth</h3>
          <Link to="/auth">
            <Button type="button">Example</Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
