// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Registration Form title', () => {
  render(<App />);
  const titleElement = screen.getByText(/Registration Form/i); // This will look for the text in NavHead
  expect(titleElement).toBeInTheDocument();
});
