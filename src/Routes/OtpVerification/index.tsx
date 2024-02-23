import React, {  useEffect, useState } from 'react'
import {  useLocation, useNavigate } from 'react-router-dom';
import { otpVerification } from '../../Services';
import Form from '../../Components/InfraStructure/Form';
import { HomePageScreen } from '../../Components/Screens/HomePageScreen';


export const OtpVerification = () => {
    const { state } = useLocation();
    useEffect(() => {
        if (!state?.email) navigate('/forgotpassword');
    }, [state?.email]);
    const [error, setError] = useState('');
    const [serverError, setSeverError] = useState<any>(null);
    const navigate=useNavigate();
    const onSubmit= async ({ otp }: { otp: string })=>{
      setSeverError(null);
  
      const res=await otpVerification(
        state?.email,
        otp);
      
     if (!res.status) {
      res.data.forEach(
        ({ path, message }: { path: string; message: string }) => {
          if (path === "all") {console.log(message);
          
            setError(message);
          }
        },
      );
      return false;
    }
      navigate('/ResetPassword')
     
      return true;
  
    }
   

  return (
    <HomePageScreen title='Forgot Password' link='/login' linkLabel='Back'>

    <Form 
    
    formStructure = {[
        {
            field: "otp",
            type: 'otp'
            },
    ]}
    emptyForm={{
        otp: ''
    }}
    validateFunction={() => ({ status: true })}
    onSubmit={onSubmit}
    serverError={serverError}
    formSubmitButtonLabel="Verify OTP"
    commonError={error}
    />
        
   </HomePageScreen>
      
        
      
    
  
      
       

  )
  }

    