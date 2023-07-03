import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Counter from '../containers/Counter';

describe('Menambahkan nilai', () => {
  test('User me-klik tombol+ 1 kali expected value 1', async () => {
    const { findByTestId, getByTestId } = render(<Counter />);
    const btnIncrement = getByTestId('btnIncrement');
    userEvent.click(btnIncrement);
    const result = await findByTestId('result');
    expect(result.innerHTML).toBe('1');
  });

  test('User me-klik tombol+ 2 kali expected value 2', async () => {
    const { findByTestId, getByTestId } = render(<Counter />);
    const btnIncrement = getByTestId('btnIncrement');
    userEvent.click(btnIncrement);
    userEvent.click(btnIncrement);
    const result = await findByTestId('result');
    expect(result.innerHTML).toBe('2');
  });

  test.skip('User me-klik tombol+ 1 kali not.expected value 5', async () => {
    const { findByTestId, getByTestId } = render(<Counter />);
    const btnIncrement = getByTestId('btnIncrement');
    userEvent.click(btnIncrement);
    const result = await findByTestId('result');
    expect(result.innerHTML).not.toBe('5');
  });

  test.skip('User me-klik tombol+ 2 kali not.expected value 7', async () => {
    const { findByTestId, getByTestId } = render(<Counter />);
    const btnIncrement = getByTestId('btnIncrement');
    userEvent.click(btnIncrement);
    userEvent.click(btnIncrement);
    const result = await findByTestId('result');
    expect(result.innerHTML).not.toBe('7');
  });
});

describe.skip('Mengurangi nilai', () => {
  test('User me-klik tombol- 1 kali expected value 0', async () => {
    const { findByTestId, getByTestId } = render(<Counter />);
    const btnDecrement = getByTestId('btnDecrement');
    userEvent.click(btnDecrement);
    const result = await findByTestId('result');
    expect(result.innerHTML).toBe('-1');
  });

  test('User me-klik tombol- 2 kali expected value -2', async () => {
    const { findByTestId, getByTestId } = render(<Counter />);
    const btnDecrement = getByTestId('btnDecrement');
    userEvent.click(btnDecrement);
    userEvent.click(btnDecrement);
    const result = await findByTestId('result');
    expect(result.innerHTML).toBe('-2');
  });

  test('User me-klik tombol- 1 kali expected value -10', async () => {
    const { findByTestId, getByTestId } = render(<Counter />);
    const btnDecrement = getByTestId('btnDecrement');
    userEvent.click(btnDecrement);
    const result = await findByTestId('result');
    expect(result.innerHTML).not.toBe('-10');
  });

  test('User me-klik tombol- 1 kali expected value -5', async () => {
    const { findByTestId, getByTestId } = render(<Counter />);
    const btnDecrement = getByTestId('btnDecrement');
    userEvent.click(btnDecrement);
    userEvent.click(btnDecrement);
    const result = await findByTestId('result');
    expect(result.innerHTML).not.toBe('-5');
  });
});
