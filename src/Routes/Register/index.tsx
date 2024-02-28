import React, { useState } from "react";
import { HomePageScreen } from "../../Components/Screens/HomePageScreen";
import { validateRegister } from "../../Validation";
import Form from "../../Components/InfraStructure/Form";
import { Link, useNavigate } from "react-router-dom";
import { RegisterSubmit } from "../../Services";

export const Register = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const OnSubmit = async (data: object) => {
    const res = await RegisterSubmit(data);
    if (!res.status) {
    setError(res.message)
      return false;
    }
    navigate("/login");
  };
  return (
    <div>
      <HomePageScreen
        title="Register"
        linkLabel="Already have an Account? Sign In here"
        link="/login"
      >
        <Form
          formStructure={[
            {
              field: "name",
              placeholder: "Enter your Name",
            },
            {
              field: "email",
              placeholder: "Email Address",
            },
            {
              field: "password",
              type: "password",
              placeholder: "Password",
            },
          ]}
          emptyForm={{ 
            name: "",
            email: "",
            password: "",
           
          }}
          validateFunction={validateRegister}
          onSubmit={OnSubmit}
          commonError={error}
          formSubmitButtonLabel="Register"
        />
      </HomePageScreen>
    </div>
  );
};
