import PropTypes from 'prop-types';
import { Container } from 'components/Container/Container';
import style from './Section.module.scss';

export const Section = ({ children, id }) => {
  return (
    <section className={style.section} id={id}>
      <Container>{children}</Container>
    </section>
  );
};

Section.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
