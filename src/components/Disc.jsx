import React from "react";

export default function Disc({ src, title, style }) {
  return (
    <div
      className="absolute w-32 h-32 transform transition-transform duration-500 ease-out"
      style={style}
    >
      <img
        src={src}
        alt={title}
        className="w-full h-full object-cover rounded-full shadow-lg"
      />
      <p className="text-center text-white mt-2">{title}</p>
    </div>
  );
}
