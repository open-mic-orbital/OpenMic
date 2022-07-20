import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ProfileCard from '../ProfileCard';

test('Render profile card description', () => {
  render(<ProfileCard />);
  const linkElement = screen.getByText(/No description provided./i);
  expect(linkElement).toBeInTheDocument();
});

test('Check profile card contact links to Instagram', () => {
  render(<ProfileCard />);
  const linkElement = screen.getByText(/Contact/i);
  expect(linkElement).toBeInTheDocument();
  expect(linkElement).toContainHTML('href="https://instagram.com/garfield"');
})