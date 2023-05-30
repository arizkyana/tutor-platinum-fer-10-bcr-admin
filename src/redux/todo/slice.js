import { createSlice } from '@reduxjs/toolkit';
import dayjs from 'dayjs';

export const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    todos: [],
    todoItem: {},
  },
  reducers: {
    setTodoItem(state, action) {
      state.todoItem = { ...action.payload };
    },
    add: (state, action) => {
      const currentTodos = [...state.todos];
      const newTodo = {
        ...action.payload,
        createdAt: dayjs().format(),
      };
      currentTodos.push(newTodo);
      state.todos = [...currentTodos];
    },
    remove: (state, action) => {
      const currentTodos = [...state.todos];
      const { index } = action.payload;
      currentTodos.splice(index, 1);
      state.todos = currentTodos;
    },
    update: (state, action) => {
      const currentTodos = [...state.todos];
      const { index, ...todoItem } = action.payload;
      currentTodos[index] = { ...todoItem };
      state.todos = currentTodos;
    },
  },
});

export const { add, remove, update, setTodoItem } = todoSlice.actions;

export default todoSlice.reducer;
