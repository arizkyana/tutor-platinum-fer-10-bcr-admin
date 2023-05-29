import { createSlice } from '@reduxjs/toolkit';

export const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    todos: [],
  },
  reducers: {
    add: (state, action) => {
      const currentTodos = [...state.todos];
      const newTodo = action.payload;
      currentTodos.push(newTodo);
      state.todos = [...currentTodos];
    },
    remove: (state, action) => {
      const currentTodos = [...state.todos];
      const index = action.payload;
      currentTodos.splice(index, 1);
      state.todos = currentTodos;
    },
    update: (state, action) => {
      const currentTodos = [...state.todos];
      const index = action.payload.index;
      const updatedTodo = action.payload.todo;
      currentTodos[index] = { ...updatedTodo };
      state.todos = currentTodos;
    },
  },
});

export const { add, remove, update } = todoSlice.actions;

export default todoSlice.reducer;
