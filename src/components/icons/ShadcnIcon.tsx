import { IconProps } from '@types';

const ShadcnIcon = ({ width, height, className }: IconProps) => {
  return (
    <svg
      className={className}
      height={height}
      width={width}
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      viewBox="0 0 256 256"
      stroke="currentColor"
      strokeWidth="10"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    >
      <line x1="208" y1="128" x2="128" y2="208" />
      <line x1="192" y1="40" x2="40" y2="192" />
    </svg>
  );
};

export default ShadcnIcon;
