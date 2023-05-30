import React, { useEffect, useState } from 'react';
import {
  Navbar,
  Container,
  Row,
  Col,
  Card,
  Button,
  Modal,
} from 'react-bootstrap';
import dayjs from 'dayjs';
import { customAlphabet } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';

import { add, remove } from '../../redux/cart/slice';

const dataProducts = Array.from({ length: 10 }, (_, index) => ({
  createdAt: dayjs().format(),
  id: customAlphabet('ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456890')(5),
  name: `Avocado - ${index}`,
  price: Math.floor(Math.random() * 1000),
}));

function CartsModal(props) {
  const { carts } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(
      remove({
        id,
      })
    );
  };

  return (
    <Modal {...props}>
      <Modal.Header closeButton>
        <Modal.Title>Carts</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {carts && carts.length === 0 ? (
          <div>{`Cart is empty. Let's add new item!`}</div>
        ) : (
          <>
            {carts.map((cartItem) => (
              <div
                key={cartItem.id}
                className="d-flex justify-content-between align-items-center mb-3"
              >
                <div>
                  <div>
                    {cartItem.name} {cartItem.id}
                  </div>
                  <div>{`Rp. ${cartItem.price}`}</div>
                </div>
                <div>
                  <Button
                    type="button"
                    variant="danger"
                    size="sm"
                    onClick={() => handleRemove(cartItem.id)}
                  >
                    Remove
                  </Button>
                </div>
              </div>
            ))}
          </>
        )}
      </Modal.Body>
    </Modal>
  );
}

function ProductItem(props) {
  const { onAddToCart, onRemove, isAddedToCart, ...item } = props;

  return (
    <Col lg={3} key={item.id}>
      <Card>
        <Card.Body>
          <span className="d-block">{item.id}</span>
          <h5>{item.name}</h5>
          <p>{`Rp. ${item.price}`}</p>
        </Card.Body>
        <Card.Footer>
          {isAddedToCart ? (
            <Button
              type="button"
              variant="danger"
              className="d-block"
              style={{ width: '100%' }}
              onClick={() => onRemove(item)}
            >
              Remove
            </Button>
          ) : (
            <Button
              type="button"
              variant="success"
              className="d-block"
              style={{ width: '100%' }}
              onClick={() => onAddToCart(item)}
            >
              Add to Cart
            </Button>
          )}
        </Card.Footer>
      </Card>
    </Col>
  );
}

function Products() {
  const { carts } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const [showCart, setShowCart] = useState(false);

  const handleAddToCart = (item) => {
    dispatch(add(item));
  };

  const handleRemove = (item) => {
    dispatch(remove(item));
  };

  useEffect(() => {
    if (carts && carts.length > 0) {
      // const findCartItem = carts.findIndex(
      //   (cartItem) => cartItem.id === item.id
      // );
      console.log('carts > ', carts);
      // console.log('findCartItem > ', findCartItem);
      // setIsExist(findCartItem);
    }
  }, [carts]);

  const isAddedToCart = (cartItem) => {
    const findCartItem = carts.findIndex((item) => item.id === cartItem.id);
    if (findCartItem >= 0) return true;
    return false;
  };

  return (
    <div>
      <CartsModal show={showCart} onHide={() => setShowCart(false)} />
      <Navbar>
        <Container>
          <Navbar.Brand href="#home">FreshGardenFruit</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              Cart:{' '}
              <a href="#" onClick={() => setShowCart(true)}>
                {carts.length}
              </a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container>
        <Row className="g-3">
          {dataProducts &&
            dataProducts.map((item) => (
              <ProductItem
                {...item}
                key={item.id}
                onAddToCart={handleAddToCart}
                onRemove={handleRemove}
                isAddedToCart={isAddedToCart(item)}
              />
            ))}
        </Row>
      </Container>
    </div>
  );
}

export default Products;
