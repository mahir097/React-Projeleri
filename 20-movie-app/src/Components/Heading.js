import React from "react";

export default function Heading({ children }) {
  return (
    <div className="header">
      <h1>{children}</h1>
    </div>
  );
}
