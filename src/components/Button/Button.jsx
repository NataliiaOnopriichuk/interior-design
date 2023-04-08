import React from 'react';
import style from './Button.module.scss';

export const Button = () => {
  return (
    <button className={`${style.button} ${style.inner}`} type="button">
      Contact Us
    </button>
  );
};
