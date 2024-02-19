import { useMemo } from "react";

type ButtonType = 'Primary' | 'Secondary' | 'Inline';

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
      
      Primary: `bg-pink-500 p-2 w-full rounded-sm
    text-white cursor-pointer hover:opacity-90
    transition-all `,
      Inline: `text-black  p w-full rounded-sm
  text-white cursor-pointer hover:opacity-90
  transition-all`,
      Secondary:
          'text-slate-700 p-3 w-full cursor-pointer hover:opacity-90'
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
