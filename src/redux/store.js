import { combineReducers, configureStore } from '@reduxjs/toolkit';
import todoReducer from './todo/slice';
import cartReducer from './cart/slice';

const rootReducer = combineReducers({
  todo: todoReducer,
  cart: cartReducer,
});

export default configureStore({
  reducer: rootReducer,
});
