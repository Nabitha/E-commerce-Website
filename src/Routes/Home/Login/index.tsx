import React, { useState } from 'react'
import Form from '../../../Components/InfraStructure/Form';
import { validateRegister } from '../../../Validation';
import { HomePageScreen } from '../../../Components/Screens/HomePageScreen';
import { Link, useNavigate } from 'react-router-dom';
import { loginCall } from '../../../Services';


export const Login = () => {
  const [error,setError]=useState("");
  const navigate=useNavigate();
  console.log("h");

  const onSubmit= async (data:object)=>{
    console.log("i");
    
    const res=await loginCall(data);
    if (!res.status) {
      res.data.forEach(
        ({ path, message }: { path: string; message: string }) => {
          if (path === "all") {
            setError(message);
          }
        },
      );
      return false;
    }
    localStorage.setItem('token', res.data.token);
    navigate('/otpverification')
   
    return true;

  }
  return (
    
   <HomePageScreen title='Login'>

    
        <Form formStructure={[
        {
          field: "email",
          label: "Email Address:",
          placeholder: "Email Address"
        },
        {
          field: "password",
          label: "Password:",
          type: "password",
          placeholder: "Password"
        }
      ]}
      emptyForm={{
        email: "",
        password: ""
      }}


      validateFunction={validateRegister}
      onSubmit={onSubmit}
      formSubmitButtonLabel="Sign In"
      commonError={error}
     
      afterFormSection={<div className='text-slate-400 text-xs p-4 text-left font-normal'>
        <div>
        <Link to="/forgotpassword">Forgot Password?</Link>
        </div>
     </div>}   />
     <div className='text-slate-400 text-xs font-normal '>
     <Link to="/register">Don't have an Account?Create account</Link>
     </div>
     
      
      
          
  
      
      
  
      
     
      </HomePageScreen>
      
  
  )
}
