import { IconProps } from "types";

export const IconShoe = (props: IconProps) => {
    const { size, color } = props;
  
    return (
      <svg
        width={size || "24px"}
        height={size || "24px"}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M21 16v-2l-8-5V2a1 1 0 00-2 0v7l-8 5v2l8-1.5V18l-2.5 1.5v1l3.5-.5 3.5.5v-1L13 18v-3.5L21 16z"
          fill={color || "gray"}
        />
      </svg>
    );
  };