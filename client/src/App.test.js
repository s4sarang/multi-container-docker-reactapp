import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

test('renders Welcome text', () => {
  render(<App />);
  const textElement = screen.getByText(/Welcome/i);
  expect(textElement).toBeInTheDocument();
});
