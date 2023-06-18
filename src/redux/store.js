import { combineReducers, configureStore } from '@reduxjs/toolkit';
import todoReducer from './todo/slice';
import cartReducer from './cart/slice';
import authReducer from './auth/slice';

const rootReducer = combineReducers({
  todo: todoReducer,
  cart: cartReducer,
  auth: authReducer,
});

export default configureStore({
  reducer: rootReducer,
});
