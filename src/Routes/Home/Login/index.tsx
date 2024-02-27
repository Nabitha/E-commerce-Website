import React, { useState } from "react";
import Form from "../../../Components/InfraStructure/Form";
import { ValidateLogin } from "../../../Validation";
import { HomePageScreen } from "../../../Components/Screens/HomePageScreen";
import { Link, useNavigate } from "react-router-dom";
import { loginCall } from "../../../Services";
import useAppContext from "../../../Hooks/useAppContext";

export const Login = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { reload: reloadHeader } = useAppContext();


  const onSubmit = async (data: object) => {
    const res = await loginCall(data);
    if (!res.status) {
        setError(res.message)
        return false;
    }
    localStorage.setItem("token", res.data.token);
    navigate(-1);
    reloadHeader();

    return true;
  };
  return (
    <HomePageScreen title="Login">
      <Form
        formStructure={[
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
        }}
        validateFunction={ValidateLogin}
        onSubmit={onSubmit}
        formSubmitButtonLabel="Sign In"
        commonError={error}
        afterFormSection={
          <div className="text-slate-400 text-xs p-4 text-left font-normal">
            <div>
              <Link to="/forgotPassword">Forgot Password?</Link>
            </div>
          </div>
        }
      />
      <div className="text-slate-400 text-xs font-normal ">
        <Link to="/register">Don't have an Account?Create account</Link>
      </div>
    </HomePageScreen>
  );
};
