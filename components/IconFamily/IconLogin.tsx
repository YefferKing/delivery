import { IconProps } from "types";

export const IconLogin = (props: IconProps) => {
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
          d="M10 16v-3H3v-2h7V8l5 4-5 4zM20 3H9a2 2 0 00-2 2v3h2V5h11v14H9v-3H7v3a2 2 0 002 2h11a2 2 0 002-2V5a2 2 0 00-2-2z"
          fill={color || "gray"}
        />
      </svg>
    );
  };