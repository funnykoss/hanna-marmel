import Container from '../Container';
import s from './Biography.module.css';

const Biography = () => {
  return (
    <div className={s.section}>
      <Container>
        <h2 className={s.title}> Hanna Martysheva</h2>
        <p className={s.description}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit sapiente molestias
          mollitia, aspernatur nostrum consequatur itaque harum adipisci voluptas iure? Aut quam
          voluptatum libero atque tempore deserunt fugiat cupiditate ipsa!
        </p>
      </Container>
    </div>
  );
};
export default Biography;
