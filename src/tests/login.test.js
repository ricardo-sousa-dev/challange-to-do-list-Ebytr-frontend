import React from 'react';
import { screen } from '@testing-library/dom';
// import userEvent from '@testing-library/user-event';
import renderWithRouter from '../helpers/renderWithRouter';
import App from '../App';

describe('Página inicial - Login:', () => {
  test('verifica que existe a logo da empresa', () => {
    renderWithRouter(<App />);

    const header = screen.getByRole('img', { name: 'logo' });

    expect(header).toBeInTheDocument();
  });
});