import React from "react";

export function Caption({ children, className, upperCase, style }) {
  const uppercaseClass = upperCase ? "uppercase" : "";
  return (
    <span
      className={`${uppercaseClass} ${className || ""}`}
      style={{
        fontSize: "16px",
        fontWeight: "400",
        lineHeight: "24px",
        letterSpacing: "0em",
        ...style,
      }}
    >
      {children}
    </span>
  );
}
