import React from 'react';
import styles from './Disc.module.css';

export default function Disc({ name, index }) {
  const radius = 200;
  const angle = index * 90;
  const transform = `
    rotateY(${angle}deg)
    translateZ(${radius}px)
  `;

  return (
    <div
      className={styles.disc}
      style={{
        transform,
        backgroundImage: `url(/discs/${name}.jpg)`
      }}
   
