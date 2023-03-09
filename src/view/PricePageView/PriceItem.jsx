import s from './PricePageView.module.css';
const PriceItem = ({ title, price, type, features }) => {
  return (
    <div className={s.snip1265}>
      <div className={s.plan}>
        <header>
          <i className={s.ionIosNavigateOutline}></i>
          <h4 className={s.planTitle}>{title}</h4>
          <div className={s.planCost}>
            <span className={s.planPrice}>${price}</span>
            <span className={s.planType}>/{type}</span>
          </div>
        </header>
        <ul className={s.planFeatures}>
          <li>{features}</li>
        </ul>
        <div className={s.planSelect}></div>
      </div>
    </div>
  );
};
export default PriceItem;
