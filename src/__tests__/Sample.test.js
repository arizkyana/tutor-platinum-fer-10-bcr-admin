import { render } from '@testing-library/react';

function Sample() {
  return <div>Isi komponen</div>;
}

describe('Belajar Unit Testing', () => {
  test('render komponen Sample', () => {
    const { getByText } = render(<Sample />);
    const textValue = getByText(/Isi komponen/);
    expect(textValue).toBeInTheDocument();
  });
});
