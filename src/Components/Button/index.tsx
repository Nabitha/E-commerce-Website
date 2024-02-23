import { useMemo } from "react";

type ButtonType = 'Primary' | 'Secondary' | 'Inline' | 'checkout';

interface PropsTypes {
  label: String;
  type?: ButtonType;
  onClick?: () => void;
  action?: 'submit' | 'button';
  disabled?: boolean;
  loading?: boolean;
}

const Button = ({
  label,
  type = 'Primary',
  onClick,
  action = 'button',
  disabled = false,
  loading = false,
}: PropsTypes) => {
  const getStyle = useMemo(
    () =>
    ({
      
      Primary: `bg-pink-500 p-2 text-base w-full rounded-sm
    text-white cursor-pointer hover:opacity-90
    transition-all `,
      Inline: `text-black bg-pink-500 p-2 rounded-sm
  text-white cursor-pointer hover:opacity-90
  transition-all`,
      Secondary:
          'text-slate-700 p-3  cursor-pointer hover:opacity-90',
          checkout: 'bg-green-500 w-full text-white p-1 rounded'
  })[type],
[type]
);

  return (
    <button
    className={getStyle}
      onClick={() => !loading && onClick?.()}
      type={action}
      disabled={loading || disabled}
    >
      {label}
    </button>
  );
};

export default Button;
