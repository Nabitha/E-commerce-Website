import React from 'react'
import Form from '../../../Components/InfraStructure/Form';
import { validateRegister } from '../../../Validation';

import { HomePageScreen } from '../../../Components/Screens/HomePageScreen';


export const Login = () => {
  return (
   <HomePageScreen title='Login' subtitle='Please login using Account detail below'>

    
        <Form formStructure = {[
            
                
            
            {
                field: "email",
                label: "Email Address:",
                placeholder:"Email Address"
                
            },
            {
                field: "password",
                label: "Password:",
                type:  "password",
                placeholder:"Password"
            }
        ]}
        emptyForm={{
          
          email:"",
          password:""
        }}
        
        
        validateFunction={validateRegister}
        onSubmit={(d)=>console.log(d)}
        formSubmitButtonLabel="Sign In"
        afterFormSection={
         
          <div className='text-slate-400 text-xs text-left p-2 font-normal'><a href="#">Forgot Password?</a></div>
          
       
            
        }
      />
      <div className='text-slate-400 text-xs font-normal '><a href='#'>Don't have an Account?Create account</a></div>
      
          
  
      
      
  
      
     
      </HomePageScreen>
      
  
  )
}
