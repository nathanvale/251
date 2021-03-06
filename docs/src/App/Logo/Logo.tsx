import React from "react";

interface LogoProps {
  width?: string;
  height?: string;
}

export const Logo = ({
  width = "64px",
  height = "64px",
  ...props
}: LogoProps) => (
  <svg
    style={{ marginLeft: "-12px" }}
    width={width}
    height={height}
    viewBox="0 0 48 48"
    {...props}
  >
    <defs>
      <linearGradient id="a" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FF373C" />
        <stop offset="100%" stopColor="#FFC72C" />
      </linearGradient>
    </defs>
    <path
      fill="url(#a)"
      fillRule="nonzero"
      d="M15 0C8.515-.006 2.762 4.148.745 10.294A14.918 14.918 0 0 0 6.135 27a15.021 15.021 0 0 1 17.73 0 14.918 14.918 0 0 0 5.39-16.706C27.238 4.148 21.485-.006 15 0zm0 22.578c-4.224-.003-7.646-3.42-7.645-7.631.001-4.212 3.425-7.626 7.65-7.627 4.223-.001 7.65 3.41 7.653 7.623a7.618 7.618 0 0 1-2.241 5.4A7.663 7.663 0 0 1 15 22.579z"
      transform="translate(9 10)"
    />
  </svg>
);
