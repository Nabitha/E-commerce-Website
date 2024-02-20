import React from 'react'
import { validateRegister } from '../../../Validation'
import Form from '../../../Components/InfraStructure/Form'
import { HomePageScreen } from '../../../Components/Screens/HomePageScreen'
export const ForgotPassword = () => {
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
        validateFunction={validateRegister}
        onSubmit={(d)=>console.log(d)}

        formSubmitButtonLabel='Next' 
              
      />
      </HomePageScreen> 
  )
}
