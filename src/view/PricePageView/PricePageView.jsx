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
      {/* <div className={s.snip1265}>
        <div className={s.plan}>
          <header>
            <i className={s.ionIosNavigateOutline}></i>
            <h4 className={s.planTitle}>Starter</h4>
            <div className={s.planCost}>
              <span className={s.planPrice}>$19</span>
              <span className={s.planType}>/month</span>
            </div>
          </header>
          <ul className={s.planFeatures}>
            <li>5GB Linux Web Space</li>
            <li>5 MySQL Databases</li>
            <li>Unlimited Email</li>
            <li>250Gb mo Transfer</li>
            <li>24/7 Tech Support</li>
            <li>Daily Backups</li>
          </ul>
          <div className={s.planSelect}>
            <a href="">Select Plan</a>
          </div>
        </div>
        <div className={s.plan}>
          <header>
            <i className={s.ionIosWorld}></i>
            <h4 className={s.planTitle}>Basic</h4>
            <div className={s.planCost}>
              <span className={s.planPrice}>$29</span>
              <span className={s.planType}>/month</span>
            </div>
          </header>
          <ul className={s.planFeatures}>
            <li>10GB Linux Web Space</li>
            <li>10 MySQL Databases</li>
            <li>Unlimited Email</li>
            <li>500Gb mo Transfer</li>
            <li>24/7 Tech Support</li>
            <li>Daily Backups</li>
          </ul>
          <div className={s.planSelect}>
            <a href="">Select Plan</a>
          </div>
        </div>
        <div className={s.planFeatures}>
          <header>
            <i className={s.ionIosPeople}></i>
            <h4 className={s.planTitle}>Professional</h4>
            <div className={s.planCost}>
              <span className={s.planPrice}>$49</span>
              <span className={s.planType}>/month</span>
            </div>
          </header>
          <ul className={s.planFeatures}>
            <li>25GB Linux Web Space</li>
            <li>25 MySQL Databases</li>
            <li>Unlimited Email</li>
            <li>2000Gb mo Transfer</li>
            <li>24/7 Tech Support</li>
            <li>Daily Backups</li>
          </ul>
          <div className={s.planSelect}>
            <a href="">Select Plan</a>
          </div>
        </div>
        <div className={s.plan}>
          <header>
            <i className={s.ionIosSpeedometer}></i>
            <h4 className={s.planTitle}>Ultra</h4>
            <div className={s.planCost}>
              <span className={s.planPrice}>$99</span>
              <span className={s.planType}>/month</span>
            </div>
          </header>
          <ul className={s.planFeatures}>
            <li>100GB Linux Web Space</li>
            <li>Unlimited MySQL Databases</li>
            <li>Unlimited Email</li>
            <li>10000Gb mo Transfer</li>
            <li>24/7 Tech Support</li>
            <li>Daily Backups</li>
          </ul>
          <div className={s.planSelect}>
            <a href="">Select Plan</a>
          </div>
        </div>
      </div> */}
    </Container>
  );
};
export default PricePageView;
