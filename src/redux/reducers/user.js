import { VALIDATE_LOGIN } from '../actions';

const INITIAL_STATE = {
  user: {
    email: '',
  },
};

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case VALIDATE_LOGIN:
    return { ...state, email: action.payload };
  default:
    return state;
  }
};

export default user;
