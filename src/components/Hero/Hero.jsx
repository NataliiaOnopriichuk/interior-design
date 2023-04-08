import { Container } from 'components/Container/Container';
import style from './Hero.module.scss';

export const Hero = () => {
  return (
    <div className={style.hero} id="Hero">
      <Container>
        <div className={style.content}>
          <h1 className={style.title}>Burger Factory</h1>
          <p className={style.subtitle}>
            Your dreamed burger close to your locations!
          </p>
        </div>
      </Container>
    </div>
  );
};
