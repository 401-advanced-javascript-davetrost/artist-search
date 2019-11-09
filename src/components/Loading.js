import React from 'react';
import styles from './Loading.css';

export default function Loading() {
  return (
    <div className={styles.Loading}>
      <img src="/src/assets/loading.gif" />
    </div>
  );
}
