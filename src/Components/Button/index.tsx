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

  return (
    <button
      className="bg-pink-500 rounded-sm w-80 p-2  font-bold text-white text-base "
      onClick={() => !loading && onClick?.()}
      type={action}
      disabled={loading || disabled}
    >
      {label}
    </button>
  );
};

export default Button;
