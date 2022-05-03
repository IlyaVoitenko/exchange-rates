import { SET_ARRAY_CURRENCY } from '../actionTypes';

const initialState = {
  USDtoUAH: null,
  EURtoUAH: null,
  arrayСurrency: [{ ccy: '', base_ccy: '', buy: 0, sale: 0 }],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ARRAY_CURRENCY:
      return { ...state, arrayСurrency: [...action.payload] };
    default:
      return state;
  }
};

export default reducer;
