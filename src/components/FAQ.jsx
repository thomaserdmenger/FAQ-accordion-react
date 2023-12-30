import * as React from 'react';
import data from '../assets/data/data';
import styles from '../App.module.css';

export default function ({ id, answer, question }) {
  const [accordionOpen, setAccordionOpen] = React.useState(false);

  const toggleState = (id) => {
    setAccordionOpen(!accordionOpen);
  };

  return (
    <div key={id}>
      <div
        className={styles.faqHeader}
        onClick={toggleState}
      >
        <h2>{question}</h2>
        {accordionOpen ? <span>-</span> : <span>+</span>}
      </div>
      <div className={accordionOpen ? styles.faqBodyHide : styles.faqBody}>
        <p>{answer}</p>
      </div>
    </div>
  );
}
