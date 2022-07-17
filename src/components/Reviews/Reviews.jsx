import s from './Reviews.module.css';
import reviews from '../../JSON/reviews.json';

const Reviews = () => {
  return (
    <div className={s.reviewSection}>
      <ul>
        {reviews.map(({ name, reviewText, id }) => (
          <li key={id}>
            <p className={s.reviewName}>{name} </p>
            <p className={s.reviewText}>{reviewText}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reviews;
