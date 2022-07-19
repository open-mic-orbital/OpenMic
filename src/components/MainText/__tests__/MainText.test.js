import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import MainText from "../MainText";

test('Render heading', () => {
    render(<MainText />);
    const headerElement = screen.getByText(/Live Entertainment/);
    expect(headerElement).toBeInTheDocument();
})