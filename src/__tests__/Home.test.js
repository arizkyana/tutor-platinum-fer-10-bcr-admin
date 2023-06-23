import React from 'react';
import { render } from '@testing-library/react';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from '../containers/Home';

import Button from '../components/Button';

function AppWrapper() {
  // const {children} = props;
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
  ]);
  return <RouterProvider router={router} />;
}

describe('testing home', () => {
  test('render Home', () => {
    render(<Home />, {
      wrapper: AppWrapper,
    });
    expect(true).toBeTruthy();
  });
  test('show text Redux Case Studies in Home page', () => {
    const { getByText } = render(<Home />, {
      wrapper: AppWrapper,
    });
    const targetText = getByText(/Redux Case Studies/);
    expect(targetText).toBeInTheDocument();
  });
  test('check button is exist by test-id button', async () => {
    const { findByTestId } = render(<Home />, {
      wrapper: AppWrapper,
    });
    const targetButton = await findByTestId(/button/);
    expect(targetButton).toBeInTheDocument();
  });
});
