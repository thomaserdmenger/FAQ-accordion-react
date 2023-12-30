import * as React from 'react';
import data from '../assets/data/data';
import styles from '../App.module.css';
import iconMinus from '../assets/images/icon-minus.svg';
import iconPlus from '../assets/images/icon-plus.svg';

export default function ({ id, answer, question }) {
  const [accordionOpen, setAccordionOpen] = React.useState(false);

  const toggleState = (id) => {
    setAccordionOpen(!accordionOpen);
  };

  return (
    <div
      className={styles.faqWrapper}
      key={id}
    >
      <div
        className={styles.faqHeader}
        onClick={toggleState}
      >
        <h2>{question}</h2>
        {accordionOpen ? (
          <img
            className={styles.image}
            src={iconMinus}
            alt='Icon Minus'
          />
        ) : (
          <img
            className={styles.image}
            src={iconPlus}
            alt='Icon Plus'
          />
        )}
      </div>
      <div className={accordionOpen ? styles.faqBodyHide : styles.faqBody}>
        <p className={styles.faqAnswer}>{answer}</p>
      </div>
    </div>
  );
}
