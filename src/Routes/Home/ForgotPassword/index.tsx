import React from 'react'
import { validateRegister } from '../../../Validation'

import Form from '../../../Components/InfraStructure/Form'
import { HomePageScreen } from '../../../Components/Screens/HomePageScreen'

export const ForgotPassword = () => {
  return (
    <HomePageScreen title='Forgot Password' subtitle=''>

    
        <Form formStructure = {[
            
                
            
            {
                field: "email",
                placeholder:"Email Address"
                
            },
            {
                field: "password",
                type:  "password",
                placeholder:"New Password"
            }
        ]}
        emptyForm={{
          
          email:"",
          password:""
        }}
        
        
        validateFunction={validateRegister}
        onSubmit={(d)=>console.log(d)}
        formSubmitButtonLabel='Reset Password'
       
         
         
          
       
            
        
      />
     
      
          
  
      </HomePageScreen> 
      
  
  )
}
