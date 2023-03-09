import Container from '../../components/Container';
import s from './PricePageView.module.css';
import PriceItem from './PriceItem';
import priceList from '../../JSON/price.json';

const PricePageView = () => {
  return (
    <Container>
      <ul>
        {priceList.map(({ id, title, price, type, features }) => {
          return <PriceItem key={id} title={title} price={price} type={type} features={features} />;
        })}
      </ul>
    </Container>
  );
};
export default PricePageView;
