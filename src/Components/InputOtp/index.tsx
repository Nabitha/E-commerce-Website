import React, { ChangeEvent, useState } from 'react'
interface Props{
    value?:string
    onChange: (v: string, e: any) => void;
    length?:number

}

export const InputOtp = ({ length = 5, onChange, value = '' }: Props) => {
    const [otpDigits, setOtpDigits] = useState<string[]>(['', '', '', '', '']);
    

    const handleOtpDigitChange = (index: number) => (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        console.log(value,"value");
        
        if (/^\d*$/.test(value) && value.length <= 1) {
            const newOtpDigits = [...otpDigits];
            newOtpDigits[index] = value;
            setOtpDigits(newOtpDigits);
            if (index < 4 && value !== '') {
                document.getElementById(`otp-input-${index + 1}`)?.focus();
            
            }
            onChange(newOtpDigits.join(''), e);
            
    }
};

  return (
    <div className='flex gap-4  '>
   {otpDigits.map((digit,index)=>
             <input 
             key={index}
             id={`otp-input-${index}`}
             type="text"
             value={digit}
             maxLength={1}
             onChange={handleOtpDigitChange(index)}

             className='border-2 w-12 h-12 text-center'

            
           />
           
            )}
    </div>
  )
}
