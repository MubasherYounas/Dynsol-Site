import React from "react";

export const IconSizes = {
  sm: { width: 16, height: 16 },
  md: { width: 24, height: 24 },
  lg: { width: 32, height: 32 },
  xl: { width: 48, height: 48 },
};

const Icon = ({
  name,
  className,
  size = "md",
  customSize,
  onClick,
  style,
  ...props
}) => {
  try {
    // Path to icon SVGs in public folder
    const src = `/icons/${name}.svg`;

    const width = customSize ? customSize.width : IconSizes[size].width;
    const height = customSize ? customSize.height : IconSizes[size].height;

    return (
      <img
        onClick={onClick}
        src={src}
        className={className}
        alt={name}
        width={width}
        height={height}
        style={{ display: "inline-block", ...style }}
        {...props}
      />
    );
  } catch (error) {
    console.error(`Icon "${name}" not found.`);
    return null;
  }
};

export default Icon;
