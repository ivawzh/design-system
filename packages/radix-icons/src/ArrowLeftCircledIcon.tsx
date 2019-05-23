import * as React from 'react';
import { BaseIconProps } from './types';

interface ArrowLeftCircledIconProps extends BaseIconProps {
  size?: '25';
  type?: 'outline';
}

export const ArrowLeftCircledIcon = ({
  color = 'currentColor',
  size = '25',
  type = 'outline',
  ...props
}: ArrowLeftCircledIconProps) => {
  if (type === 'outline' && size === '25') {
    return (
      <svg
        width="25"
        height="25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path d="M12.5 20.5a8 8 0 1 0 0-16 8 8 0 0 0 0 16z" stroke={color} />
        <path
          d="M12.5 9.5l-4 3 4 3"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M8.5 12.5h8" stroke={color} strokeLinecap="round" />
      </svg>
    );
  }

  console.error(
    `ArrowLeftCircledIcon doesn't support the combination of ${size} and ${type}`
  );
  return null;
};

export default ArrowLeftCircledIcon;
