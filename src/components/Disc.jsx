import React from 'react';

export default function Disc({ name, index }) {
  const radius = 200;
  const angle = index * 90;
  const transform = `
    rotateY(${angle}deg)
    translateZ(${radius}px)
  `;

  return (
    <div
      className="disc"
      style={{
        transform,
        backgroundImage: `url(/discs/${name}.jpg)`
      }}
    >
      <span className="label">{name}</span>
    </div>
  );
}
