import { combineReducers, configureStore } from '@reduxjs/toolkit';
import todoSlice from './todo/slice';

const rootReducer = combineReducers({
  todo: todoSlice,
});

export default configureStore({
  reducer: rootReducer,
});
