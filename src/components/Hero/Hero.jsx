import { Container } from 'components/Container/Container';
import style from './Hero.module.scss';
import bgn from '../../assets/images/svg/bgn_title.svg';

export const Hero = () => {
  return (
    <div className={style.hero} id="Hero">
      <Container>
        <div className={style.wrapper}>
          <img className={style.img} src={bgn} alt="background for title" />
          <h1 className={style.title}>
            Be Comfortable in your <span className={style.span}>HOME</span>
          </h1>
        </div>
      </Container>
    </div>
  );
};
