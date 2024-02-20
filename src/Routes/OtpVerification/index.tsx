import React, { ChangeEvent, useState } from 'react'
import Button from '../../Components/Button';

export const OtpVerification = () => {
    const [otpDigits, setOtpDigits] = useState<string[]>(['', '', '', '', '']);
   
        const handleOtpDigitChange = (index: number) => (e: ChangeEvent<HTMLInputElement>) => {
            const value = e.target.value;
            if (/^\d*$/.test(value) && value.length <= 1) {
                const newOtpDigits = [...otpDigits];
                newOtpDigits[index] = value;
                setOtpDigits(newOtpDigits);
                if (index < 4 && value !== '') {
                    document.getElementById(`otp-input-${index + 1}`)?.focus();
                
                }
        }
    };


  return (
    <div className='min-h-80 font-medium text-2xl grid place-items-center gap-4 '>
        OTP Verification
        <form className='flex gap-4'>
            {otpDigits.map((digit,index)=>
             <input 
             key={index}
             id={`otp-input-${index}`}
             type="text"
             value={digit}
             maxLength={1}
             onChange={handleOtpDigitChange(index)}
             className='border-4  w-12 h-12  text-center'
           />
            )}
        
        </form>
        <div><Button label="Verify" type='Primary'/></div>
        
   
      
        
      
    </div>
  
      
       

  )
  }

    