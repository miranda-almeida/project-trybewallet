export const VALIDATE_LOGIN = 'VALIDATE_LOGIN';

export const validateLogin = (email) => ({
  type: VALIDATE_LOGIN,
  payload: email,
});

export const REQUEST_API = 'REQUEST_API';
export const REQUEST_SUCCESS = 'RESPONSE_SUCCESS';
export const REQUEST_FAILURE = 'REQUEST_FAILURE';

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
