import { REQUEST_SUCCESS, NEW_EXPENSE, REMOVE_EXPENSE } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  error: '',
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case REQUEST_SUCCESS:
    return { ...state, currencies: [...action.payload] };
  case NEW_EXPENSE:
    return { ...state, expenses: [...state.expenses, action.payload] };
  case REMOVE_EXPENSE:
    return { ...state, expenses: action.payload };
  default:
    return state;
  }
};

export default wallet;
