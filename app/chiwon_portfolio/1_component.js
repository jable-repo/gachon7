import React from 'react';
import styles from './page.module.css';

const Timeline = ({ items }) => {
  return (
    <section className={styles.timeline}>
      <h2 className={styles.marginb}>CHIWON`S History</h2>
      {items.map((item, index) => (
        <div key={index} className={styles.timelineItem}>
          <div className={styles.timelineContent}>
            <h3>{item.year}</h3>
            <p>{item.event}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Timeline;