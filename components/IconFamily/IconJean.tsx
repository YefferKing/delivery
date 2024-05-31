import { IconProps } from "types";

export const IconJean = (props: IconProps) => {
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
          d="M12 2C6.475 2 2 6.475 2 12s4.475 10 10 10 10-4.475 10-10S17.525 2 12 2zm3.5 16.062C14.007 18.678 13.05 19 12 19s-2.007-.322-3.5-.938L4.897 12l3.603-6.062c1.493-.616 2.45-.938 3.5-.938s2.007.322 3.5.938L19.103 12l-3.603 6.062zM9 12c-1.657 0-3-1.343-3-3s1.343-3 3-3h6c1.657 0 3 1.343 3 3s-1.343 3-3 3H9z"
          fill={color || "gray"}
        />
      </svg>
    );
  };