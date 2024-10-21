import React from "react";
import "@src/scss/MTitle.scss";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function MTitle({ title, desc }: any) {
  return (
    <div className="text-content">
      <span className="text-content-span">{title}</span>
      <span className="text-content-line">/</span>
      <span className="text-content-dec">{desc}</span>
    </div>
  );
}

export default MTitle;
