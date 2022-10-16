import { render, screen } from '@testing-library/react';
import menu from './compon/menu';

test('renders learn react link', () => {
  render(<menu />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
