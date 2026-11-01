import React from 'react';
import styles from './SectionHeading.module.scss';

export default function SectionHeading({ badge, title, highlight, subtitle }) {
  return (
    <div className={styles.headerWrapper} data-reveal="fade-up">
      {badge && <span className={styles.badge}>{badge}</span>}
      <h2 className={styles.title}>
        {title} {highlight && <span>{highlight}</span>}
      </h2>
      <div className={styles.divider} aria-hidden="true" />
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </div>
  );
}

