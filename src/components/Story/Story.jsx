import { Section } from 'components/Section/Section';
import style from './Story.module.scss';
import interior from '../../assets/images/jpeg/interior-with-chair@1x.jpg';
import interior2x from '../../assets/images/jpeg/interior-with-chair@2x.jpg';

export const Story = () => {
  return (
    <>
      <Section id="Who We Are?">
        <div className={style.wrapper}>
          <div className={style.inner}>
            <h2 className={style.title}>Who We Are?</h2>
            <p className={style.content}>
              At <span className={style.span}>CHID</span>, we are passionate
              about creating beautiful and functional spaces that reflect our
              clients' unique styles and needs. Our team of experienced
              designers works closely with each client to bring their vision to
              life, whether it's a cozy bedroom, a modern office space, or a
              stylish restaurant. We believe that great design is not just about
              aesthetics, but also about improving the quality of life for those
              who inhabit the space.
            </p>
          </div>
          <div className={style.thumb}>
            <img
              className={style.image}
              src={interior}
              srcSet={`${interior} 1x, ${interior2x} 2x`}
              alt="interior"
            />
          </div>
        </div>
      </Section>
    </>
  );
};
