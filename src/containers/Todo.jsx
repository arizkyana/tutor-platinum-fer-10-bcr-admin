import React, { useEffect, useState } from 'react';

import { Button, Card, Container, Form, Modal } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { add, remove, update, setTodoItem } from '../redux/todo/slice';

function FormModal(props) {
  const { todos, todoItem: initialValues } = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  const { mode = 'create', onHide, show } = props;
  const [formValues, setFormValues] = useState({
    title: null,
    description: null,
  });

  useEffect(() => {
    if (initialValues && initialValues.title) {
      console.log('masih ada initialValues dari useSelector');
      setFormValues(initialValues);
    }
  }, [initialValues]);

  const resetForm = () => {
    setFormValues({
      title: null,
      description: null,
    });
  };

  return (
    <Modal show={show} onHide={() => onHide()} onExit={() => resetForm()}>
      <Modal.Header closeButton>
        <Modal.Title>
          {mode === 'create' ? 'Add New Todo' : 'Update Todo'}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
          <h3>Todos Count: {todos.count}</h3>
        </div>
        <div>
          <h3>Initial Values</h3>
          <pre>{JSON.stringify(initialValues, undefined, 2)}</pre>
        </div>
        <div>
          <h3>Form Values</h3>
          <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
        </div>
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            if (mode === 'create') {
              dispatch(add(formValues));
            } else {
              dispatch(update(formValues));
            }
            onHide();
          }}
          className="p-2"
        >
          <div className="mb-3">
            <Form.Label htmlFor="title">Title</Form.Label>
            <Form.Control
              type="text"
              name="title"
              id="title"
              onChange={(e) =>
                setFormValues({ ...formValues, title: e.target.value })
              }
              value={formValues.title ?? ''}
            />
          </div>
          <div className="mb-3">
            <Form.Label htmlFor="description">Description</Form.Label>
            <Form.Control
              as="textarea"
              name="description"
              id="description"
              onChange={(e) =>
                setFormValues({ ...formValues, description: e.target.value })
              }
              value={formValues.description ?? ''}
            />
          </div>
          <div className="my-3">
            <Button type="submit" variant="primary">
              Save
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

function TodosCount() {
  const { todos } = useSelector((state) => state.todo);
  return (
    <div>
      <pre>{JSON.stringify(todos, undefined, 2)}</pre>
      <pre>{JSON.stringify(todos.length, undefined, 2)}</pre>
      <h3>Count : {todos && todos.length > 0 ? todos.length : 0}</h3>
    </div>
  );
}

function Todo() {
  const [openModalAddForm, setOpenModalAddForm] = useState(false);
  const [openModalEditForm, setOpenModalEditForm] = useState(false);

  const { todos } = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  return (
    <Container className="py-3">
      <TodosCount />
      <FormModal
        mode="create"
        show={openModalAddForm}
        onHide={() => setOpenModalAddForm(false)}
      />
      <FormModal
        mode="edit"
        show={openModalEditForm}
        // initialValues={todoItem}
        onHide={() => {
          setOpenModalEditForm(false);
          dispatch(setTodoItem({}));
        }}
      />

      <div className="d-flex justify-content-between align-items-center">
        <h1>Todo</h1>
        <Button type="button" onClick={() => setOpenModalAddForm(true)}>
          Add New
        </Button>
      </div>

      <div className="py-5">
        {todos && todos.length === 0 ? (
          <div>
            <p>{`Todo is empty. Let's create one !`}</p>
          </div>
        ) : (
          <>
            {todos.map((item, index) => (
              <Card key={item.createdAt} className="mb-3">
                <Card.Header>
                  <Card.Title>{item.title}</Card.Title>
                </Card.Header>
                <Card.Body>
                  <p>{item.description}</p>
                </Card.Body>
                <Card.Footer>
                  <div className="d-flex justify-content-end align-items-end">
                    <Button
                      type="button"
                      variant="secondary"
                      className="d-block"
                      size="sm"
                      style={{ marginRight: '.3rem' }}
                      onClick={() => {
                        dispatch(setTodoItem({ ...item, index }));
                        setOpenModalEditForm(true);
                      }}
                    >
                      Edit
                    </Button>
                    <div> </div>
                    <Button
                      type="button"
                      variant="danger"
                      className="d-block"
                      size="sm"
                      onClick={() => dispatch(remove({ index }))}
                    >
                      Remove
                    </Button>
                  </div>
                </Card.Footer>
              </Card>
            ))}
          </>
        )}
      </div>
    </Container>
  );
}

export default Todo;
