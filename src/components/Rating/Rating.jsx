import { Section } from 'components/Section/Section';
import style from './Rating.module.scss';
import interior from '../../assets/images/jpeg/interior-with-redsofa@1x.jpg';
import interior2x from '../../assets/images/jpeg/interior-with-redsofa@2x.jpg';

export const Rating = () => {
  return (
    <>
      <Section type="rating">
        <div className={style.wrapper}>
          <div className={style.content}>
            <p className={style.text}>300+</p>
            <p>Completed Projects</p>
          </div>
          <div className={style.thumb}>
            <img
              className={style.image}
              src={interior}
              srcSet={`${interior} 1x, ${interior2x} 2x`}
              alt="interior"
            />
          </div>
          <div className={`${style.content} ${style.content2}`}>
            <p className={style.text}>4.7/5</p>
            <p>Rating</p>
          </div>
        </div>
      </Section>
    </>
  );
};
