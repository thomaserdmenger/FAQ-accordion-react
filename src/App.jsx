import * as React from 'react';
import Accordion from './components/Accordion';
import styles from './App.module.css';
import iconStar from './assets/images/icon-star.svg';

export default function App() {
  return (
    <main>
      <section className={styles.cardWrapper}>
        <div className={styles.cardHeadingWrapper}>
          <img
            src={iconStar}
            alt='Star Logo'
          />
          <h1>FAQs</h1>
        </div>
        <Accordion />
      </section>
    </main>
  );
}
