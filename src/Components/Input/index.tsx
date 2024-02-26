import { useEffect, useState } from "react";
import { InputFieldType } from "../../Types/PropsTypes";
import Label from "../Input/Components/Label";
import Layout from "../Input/Components/Layout";
import { InputOtp } from "../InputOtp";

type PropsTypes = {
  type?: InputFieldType;
  arrow?: string;
  leftIcon?:string;
  label?: string;
  icon?: string;
  error?: string;
  info?: string;
  value?: string;
  disabled?: boolean;
  onChange: (value: string, e: any) => void;
  submitted?: boolean;
  placeholder?:string;
  onPaste?: (event: React.ClipboardEvent<HTMLInputElement>) => void;
};

const InputField = ({
  type = "text",
  label,
  error,
  value,
  placeholder,
  onChange,
  disabled = false,
  submitted = false,
  onPaste,

}: PropsTypes) => {
  const [isBlurred, setIsBlurred] = useState<boolean>(false);

  useEffect(() => {
    setIsBlurred(submitted);
  }, [submitted]);

  const onBlur = () => {
    setIsBlurred(true);
  };

  return (
    <Layout error={error} isBlurred={isBlurred} type={type}>
       {type === 'otp' ? (
                <InputOtp onChange={onChange} value={value} />
   
    
      ):type === "textarea" ? (
        <textarea
          title={label}
          value={value}
          onChange={(e) => onChange(e.target.value, e)}
          disabled={disabled}
          onBlur={onBlur}
        />

      ) : (
        <input
          type={type}
          title={label}
          value={value}
          onChange={(e) => onChange(e.target.value, e)}
          disabled={disabled}
          onBlur={onBlur}
          className="rounded-sm border w-full p-2 font-normal text-xs"
          placeholder={placeholder}
          onPaste={onPaste} 
        />
      )}
    </Layout>
  );
};

export default InputField;
