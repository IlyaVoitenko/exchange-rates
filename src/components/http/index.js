import axios from 'axios';
import { setArrayСurrency } from '../../store/actionsCreater';

export function getExchangeRates() {
  return (dispatch) => {
    return axios
      .get(`https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5`)
      .then((res) => dispatch(setArrayСurrency(res.data)));
  };
}
