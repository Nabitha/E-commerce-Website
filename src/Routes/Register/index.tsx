import React from 'react'
import { HomePageScreen } from '../../Components/Screens/HomePageScreen'
import { validateRegister } from '../../Validation'
import Form from '../../Components/InfraStructure/Form'
import { Link } from 'react-router-dom'
import Button from '../../Components/Button'

export const Register = () => {
  return (
    <div>
        <HomePageScreen title='Register' linkLabel='Already have an Account? Sign In here' link='/login'   >
         <Form formStructure={[
              {
                  field: "name",
                  label: "Name",
                  placeholder: "Enter your Name"
              },
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
              password: "",
              name: ""
          }}
          validateFunction={validateRegister}
          onSubmit={(d) => console.log(d)}
          formSubmitButtonLabel="Register"
        
            />
           
         
         
          </HomePageScreen>
       
        </div>
        
        
  )
}
