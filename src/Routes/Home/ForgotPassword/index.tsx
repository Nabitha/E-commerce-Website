import React, { useState } from 'react'
import { validateForgotPassword, validateRegister } from '../../../Validation'
import Form from '../../../Components/InfraStructure/Form'
import { HomePageScreen } from '../../../Components/Screens/HomePageScreen'
import { useNavigate } from 'react-router-dom'
import { forgotPassword } from '../../../Services'
export const ForgotPassword = () => {
  const [serverError, setSeverError] = useState<any>(null);
  const navigate=useNavigate();
  const onSubmit= async (data:object)=>{
    setSeverError(null);

    const res=await forgotPassword(data);
    console.log(res,"res");
    
    if (!res.status) {
      setSeverError(res.data);
      if (!res.data.map(({ path }: { path: string }) => path).includes("otp"))
        return false;
    }
    navigate('/otpverification')
   
    return true;

  }
 return (
    <HomePageScreen title='Forgot Password' link='/login' linkLabel='Back'>
        <Form formStructure = {[
            {
                field: "email",
                placeholder:"Email Address"
                },
        ]}
        emptyForm={{
          email:"",
        }}
        validateFunction={validateForgotPassword}
        onSubmit={onSubmit}
        serverError={serverError}
        formSubmitButtonLabel='Next'
        />

        
              
     
      </HomePageScreen> 
  )
}
