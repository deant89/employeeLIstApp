import { render, screen } from '@testing-library/react';
import Modal from './Modal';

test('renders modal', () => {
  render(<Modal />);
  const title = screen.getByText(/View/i);
  expect(title).toBeInTheDocument();
});
