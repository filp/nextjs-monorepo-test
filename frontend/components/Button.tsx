import React from 'react';

type ButtonProps = {
  onClick?: (event: React.MouseEvent) => void;
  className?: string;
};

export const Button = ({
  onClick,
  className,
  children,
}: React.PropsWithChildren<ButtonProps>) => {
  const handleOnClick = onClick
    ? (event: React.MouseEvent) => {
        event.stopPropagation();
        event.preventDefault();

        onClick(event);
      }
    : undefined;

  const baseStyles = [
    'bg-blue-400',
    'text-white',
    'px-6',
    'py-2',
    'rounded-3xl',
    'hover:bg-blue-300',
    'active:bg-blue-500',
    'select-none',
    'cursor-pointer',
    'inline-flex',
    'flex-row',
    'items-center',
    'justify-center',
    'gap-2',
    className || '',
  ];

  return (
    <button className={`${baseStyles.join(' ')}`} onClick={handleOnClick}>
      {children}
    </button>
  );
};
