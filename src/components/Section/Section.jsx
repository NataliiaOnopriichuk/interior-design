import clsx from 'clsx';
import PropTypes from 'prop-types';
import { Container } from 'components/Container/Container';
import style from './Section.module.scss';

export const Section = ({ children, id, type }) => {
  const sectionClass = clsx({
    [style.section]: true,
    [style.rating]: type === 'rating',
  });

  return (
    <section className={sectionClass} id={id}>
      <Container>{children}</Container>
    </section>
  );
};

Section.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string,
  type: PropTypes.string,
};
