import s from './Biography.module.css';

const Biography = () => {
  return (
    <div className={s.section}>
      <h2 className={s.title}> Hanna Martysheva</h2>
      <p className={s.description}>
        Hello, my name is Anna, I am a photographer with more than 7 years of experience. I am
        constantly looking for ideas for development and implementation, responsible, creative and
        sociable. I am familiar with digital and analog photographic equipment. I am proficient in
        Photoshop and Lightroom. Confident PC user. The level of German is beginner, but I am in the
        process of learning and am very motivated. I will be glad to become part of your team!
      </p>
    </div>
  );
};
export default Biography;
