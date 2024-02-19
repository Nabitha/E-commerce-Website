import React from 'react'
import Form from '../../../Components/InfraStructure/Form';
import { validateRegister } from '../../../Validation';
import { HomePageScreen } from '../../../Components/Screens/HomePageScreen';
import { Link } from 'react-router-dom';


export const Login = () => {
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
      onSubmit={(d) => console.log(d)}
      formSubmitButtonLabel="Sign In"
     
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
