import { REQUEST_WALLET } from '../actions';

const INITIAL_STATE = {
  wallet: {
    currency: [],
    expenses: [],
  },
};

const wallet = (state = INITIAL_STATE, actions) => {
  switch (actions.type) {
  case REQUEST_WALLET:
    return state;
  default:
    return state;
  }
};

export default wallet;
