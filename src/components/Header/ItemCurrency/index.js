const ItemCurrency = ({ item }) => {
  const { ccy, buy, sale } = item;
  return (
    <span>
      &nbsp;
      {ccy} {parseInt(buy * 100) / 100} / {parseInt(sale * 100) / 100}
    </span>
  );
};
export default ItemCurrency;
