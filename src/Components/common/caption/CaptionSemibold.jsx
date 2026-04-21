import React from "react";

export function Caption1Semibold({ children, className, upperCase, style }) {
  const uppercaseClass = upperCase ? "uppercase" : "";
  return (
    <span
      className={`${uppercaseClass} ${className || ""}`}
      style={{
        fontSize: "16px",
        fontWeight: "600",
        lineHeight: "24px",
        letterSpacing: "0em",
        ...style,
      }}
    >
      {children}
    </span>
  );
}
