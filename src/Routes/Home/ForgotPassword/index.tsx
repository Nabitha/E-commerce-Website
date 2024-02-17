import React from 'react'
import { validateRegister } from '../../../Validation'
import Form from '../../../Components/InfraStructure/Form'
import { HomePageScreen } from '../../../Components/Screens/HomePageScreen'
import { Link, useNavigate } from 'react-router-dom'

export const ForgotPassword = () => {
const navigate = useNavigate();
const onBack=()=>{
  navigate("/login")
  console.log("/login");
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
        validateFunction={validateRegister}
        onSubmit={(d)=>console.log(d)}

        formSubmitButtonLabel='Next'
              
      />
      </HomePageScreen> 
  )
}
