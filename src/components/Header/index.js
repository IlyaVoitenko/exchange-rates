import { getExchangeRates } from '../http';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import ItemCurrency from './ItemCurrency';

const Header = () => {
  const dispatch = useDispatch();
  const arrayСurrency = useSelector((state) => state.arrayСurrency).slice(0, 2);

  useEffect(() => {
    dispatch(getExchangeRates());
  }, [dispatch]);

  return (
    <header>
      {arrayСurrency.map((item, index) => (
        <ItemCurrency key={index} item={item} />
      ))}
    </header>
  );
};
export default Header;
