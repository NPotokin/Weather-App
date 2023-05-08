import React from 'react';
import { render, screen } from '@testing-library/react';
import Main from '../Components/Main';

describe('Main component', () => {
  test('renders Info component', () => {
    render(<Main />);
    const info = screen.getByTestId('info-component')
    expect(info).toBeInTheDocument();
  });

  test('renders Navbar component', () => {
    const { getByTestId } = render(<Main />);
    expect(screen.getByTestId('navbar-component')).toBeInTheDocument();
  });

  

});