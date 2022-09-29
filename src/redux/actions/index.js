export const VALIDATE_LOGIN = 'VALIDATE_LOGIN';

export const validateLogin = (email) => ({
  type: VALIDATE_LOGIN,
  payload: email,
});
