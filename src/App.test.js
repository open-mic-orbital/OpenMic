import { render, screen } from '@testing-library/react';
import App from './App';
import ProfileCard from './components/ProfileCard/ProfileCard';
import {
  Router,
} from "react-router-dom";
import '@testing-library/jest-dom'

test('render profile card description', () => {
  render(<ProfileCard />);
  const linkElement = screen.getByText(/No description provided./i);
  expect(linkElement).toBeInTheDocument();
});