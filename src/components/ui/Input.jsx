import React from "react";

export default function Input({ className = "", ...props }) {
  return (
    <input
      {...props}
      className={`border border-[#a06d2d] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#cc7414] focus:border-[#4c3511] transition ${className}`}
    />
  );
}
