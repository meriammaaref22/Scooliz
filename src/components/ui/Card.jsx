import React from "react";

export default function Card({ children, className = "" }) {
  return (
    <div
      className={`bg-[#bdaa80] border border-[#7a4b1a] rounded-xl shadow-lg p-6 ${className}`}
    >
      {children}
    </div>
  );
}
