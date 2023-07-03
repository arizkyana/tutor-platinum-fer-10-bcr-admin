import React, { useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <Container className="pt-4">
      <h1 className="mb-3">Counter</h1>

      <Row>
        <Col lg={3}>
          <div className="d-flex justify-content-between align-items-center">
            <Button
              type="button"
              variant="secondary"
              onClick={() => setCount(count - 1)}
              data-testid="btnDecrement"
            >
              -
            </Button>
            <div className="flex-grow-1 text-center" data-testid="result">
              {count}
            </div>
            <Button
              type="button"
              onClick={() => setCount(count + 1)}
              data-testid="btnIncrement"
            >
              +
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Counter;
