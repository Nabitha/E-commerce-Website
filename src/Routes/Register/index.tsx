import React from "react";
import { HomePageScreen } from "../../Components/Screens/HomePageScreen";
import { validateRegister } from "../../Validation";
import Form from "../../Components/InfraStructure/Form";
import { Link, useNavigate } from "react-router-dom";

export const Register = () => {
  const navigate = useNavigate();
  const OnSubmit = async (data: any) => {
    navigate("/auth/sign-up");
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
              label: "Name",
              placeholder: "Enter your Name",
            },
            {
              field: "email",
              label: "Email Address:",
              placeholder: "Email Address",
            },
            {
              field: "password",
              label: "Password:",
              type: "password",
              placeholder: "Password",
            },
          ]}
          emptyForm={{
            email: "",
            password: "",
            name: "",
          }}
          validateFunction={validateRegister}
          onSubmit={OnSubmit}
          formSubmitButtonLabel="Register"
        />
      </HomePageScreen>
    </div>
  );
};
