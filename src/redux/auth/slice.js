import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

// network
const network = axios.create({
  baseURL: 'https://bootcamp-rent-cars.herokuapp.com',
});

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    authData: {
      email: null,
      role: null,
      accessToken: null,
    },
  },
  reducers: {
    async login(state, action) {
      const response = await network.post('/admin/auth/login', {
        ...action.payload,
      });
      console.log('response > ', response.data);
      state.authData = { ...response.data };
    },
    logout(state) {
      state.authData = null;
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
