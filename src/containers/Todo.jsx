import React, { useState } from 'react';

import { Button, Container, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../redux/todo/slice';

function Todo() {
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();

  const { todos } = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  const resetForm = () => {
    setTitle(null);
    setDescription(null);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(
      add({
        title,
        description,
      })
    );
    resetForm();
  };

  return (
    <Container>
      {/* form add todo */}
      <Form onSubmit={onSubmit}>
        <div>
          <Form.Label htmlFor="title">Title</Form.Label>
          <Form.Control
            type="text"
            name="title"
            id="title"
            onChange={(e) => setTitle(e.target.value)}
            value={title ?? ''}
          />
        </div>
        <div>
          <Form.Label htmlFor="description">Description</Form.Label>
          <Form.Control
            as="textarea"
            name="description"
            id="description"
            onChange={(e) => setDescription(e.target.value)}
            value={description ?? ''}
          />
        </div>
        <div className="my-3">
          <Button type="submit" variant="primary">
            Save
          </Button>
        </div>
      </Form>
      {/* /form add todo */}
      {/* todo item */}
      <div>{JSON.stringify(todos)}</div>
      {/* /todo item */}
    </Container>
  );
}

export default Todo;
