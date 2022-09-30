export const VALIDATE_LOGIN = 'VALIDATE_LOGIN';
export const REQUEST_API = 'REQUEST_API';
export const REQUEST_SUCCESS = 'RESPONSE_SUCCESS';
export const REQUEST_FAILURE = 'REQUEST_FAILURE';
export const NEW_EXPENSE = 'NEW_EXPENSE';
export const REMOVE_EXPENSE = 'REMOVE_EXPENSE';

export const validateLogin = (email) => ({
  type: VALIDATE_LOGIN,
  payload: email,
});

export const requestAPI = () => ({
  type: REQUEST_API,
});

export const requestSuccess = (fetch) => ({
  type: REQUEST_SUCCESS,
  payload: Object.keys(fetch).filter((currency) => currency !== 'USDT'),
});

export const requestFailure = (error) => ({
  type: REQUEST_FAILURE,
  payload: error,
});

export const actionAPI = () => async (dispatch) => {
  try {
    dispatch(requestAPI());
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const returns = await response.json();
    dispatch(requestSuccess(returns));
  } catch (error) {
    dispatch(requestFailure(error));
  }
};

export const newExpense = (conversion, expense) => ({
  type: NEW_EXPENSE,
  payload: { ...expense, exchangeRates: conversion },
});

export const requestConversion = (conversion) => async (dispatch) => {
  try {
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const returns = await response.json();
    dispatch(newExpense(returns, conversion));
  } catch (error) {
    return error;
  }
};

export const removeExpense = (expense) => ({
  type: REMOVE_EXPENSE,
  payload: expense,
});
