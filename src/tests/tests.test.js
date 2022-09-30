import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithRouterAndRedux } from './helpers/renderWith';
import App from '../App';

describe('Testes para cobertura do requisito 5', () => {
  it('Renderiza Login.js e após validação redireciona para a /carteira', () => {
    const { history } = renderWithRouterAndRedux(<App />);
    const email = screen.getByPlaceholderText('Email');
    const password = screen.getByPlaceholderText('Senha');
    const button = screen.getByRole('button');

    userEvent.type(email, 'email@provider.com');
    userEvent.type(password, '123456');
    userEvent.click(button);

    const { pathname } = history.location;
    expect(pathname).toBe('/carteira');
  });
});
