import * as React from 'react';
import { BaseIconProps } from './types';

interface PlusIconProps extends BaseIconProps {
  size?: '25' | '15';
  type?: 'outline';
}

export const PlusIcon = ({
  color = 'currentColor',
  size = '25',
  type = 'outline',
  ...props
}: PlusIconProps) => {
  if (type === 'outline' && size === '25') {
    return (
      <svg
        width="25"
        height="25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          d="M5.5 12.5h14M12.5 19.5v-14"
          stroke={color}
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (type === 'outline' && size === '15') {
    return (
      <svg
        width="15"
        height="15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          d="M2.5 7.5h10M7.5 12.5v-10"
          stroke={color}
          strokeLinecap="round"
        />
      </svg>
    );
  }

  console.error(
    `PlusIcon doesn't support the combination of ${size} and ${type}`
  );
  return null;
};

export default PlusIcon;
