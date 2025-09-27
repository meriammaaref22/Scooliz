import React from "react";

export default function Button({ children, className = "", ...props }) {
  return (
    <button
      {...props}
      className={`bg-[#f2bd77] text-[#4c3511] font-semibold px-6 py-2 rounded-lg shadow-md hover:bg-[#cc7414] transition-colors ${className}`}
    >
      {children}
    </button>
  );
}
