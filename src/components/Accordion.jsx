import * as React from 'react';
import FAQ from './FAQ';
import styles from '../App.module.css';
import data from '../assets/data/data';

export default function () {
  return (
    <div className={styles.accordionWrapper}>
      {data.map((faq) => {
        return (
          <FAQ
            key={faq.id}
            question={faq.question}
            answer={faq.answer}
          />
        );
      })}
    </div>
  );
}
