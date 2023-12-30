import * as React from 'react';
import data from '../assets/data/data';
import styles from '../App.module.css';

export default function () {
  return (
    <>
      {data.map((faq) => {
        return (
          <div key={faq.id}>
            <div className={styles.faqHeader}>
              <h2>{faq.question}</h2>
              <span>+</span>
            </div>
            <div className={styles.faqBody}>{faq.answer}</div>
          </div>
        );
      })}
    </>
  );
}
