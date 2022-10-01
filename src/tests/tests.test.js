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

  it('Renderiza elementos demarcados por test-id dos requisitos na /carteira', () => {
    const { history } = renderWithRouterAndRedux(<App />, { initialEntries: ['/carteira'] });
    const { location: { pathname } } = history;
    expect(pathname).toBe('/carteira');

    const email = screen.getByTestId('email-field');
    const total = screen.getByTestId('total-field');
    const currency = screen.getByTestId('header-currency-field');
    const value = screen.getByTestId('value-input');
    const description = screen.getByTestId('description-input');

    expect(email).toBeInTheDocument();
    expect(total).toBeInTheDocument();
    expect(currency).toBeInTheDocument();
    expect(value).toBeInTheDocument();
    expect(description).toBeInTheDocument();
  });

  it('Verifica a funcionalidade do botão para adicionar despesa', () => {
    const { history } = renderWithRouterAndRedux(<App />, { initialEntries: ['/carteira'] });
    const { location: { pathname } } = history;
    expect(pathname).toBe('/carteira');

    const button = screen.getByRole('button', {
      name: /adicionar despesa/i,
    });

    expect(button).toBeInTheDocument();
    userEvent.click(button);
  });

  it('Verifica a funcionalidade do botão de deletar despesa', async () => {
    const button = await screen.findByTestId('delete-btn');
    const info = await screen.findByRole('cell', {
      name: 'Real',
    });

    expect(button).toBeInTheDocument();
    expect(info).toBeInTheDocument();
  });
});
