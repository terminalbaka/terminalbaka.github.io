import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Hello baka link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Hello baka/i);
  expect(linkElement).toBeInTheDocument();
});
