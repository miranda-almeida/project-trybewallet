import { REQUEST_SUCCESS } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  error: '',
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case REQUEST_SUCCESS:
    return { ...state, currencies: [...action.payload] };
  default:
    return state;
  }
};

export default wallet;
