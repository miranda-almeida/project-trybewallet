import { VALIDATE_LOGIN, REQUEST_USER } from '../actions';

const INITIAL_STATE = {
  user: {
    email: '',
    password: '',
  },
};

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case VALIDATE_LOGIN:
    return action.value;
  case REQUEST_USER:
    return state;
  default:
    return state;
  }
};

export default user;
