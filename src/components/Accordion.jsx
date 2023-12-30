import * as React from 'react';
import FAQ from './FAQ';
import styles from '../App.module.css';

export default function () {
  return (
    <div className={styles.accordionWrapper}>
      <FAQ />
    </div>
  );
}
