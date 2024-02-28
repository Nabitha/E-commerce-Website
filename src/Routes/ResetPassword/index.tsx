import React, { useState } from "react";
import { HomePageScreen } from "../../Components/Screens/HomePageScreen";
import Form from "../../Components/InfraStructure/Form";
import { validateRegister, validateResetPassword } from "../../Validation";
import { useNavigate } from "react-router-dom";
import { PasswordReset } from "../../Services";

const ResetPassword = () => {
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const OnSubmit = async (data: any) => {
  const res= await PasswordReset(data);
    if (!res.status) {
      setError(res.message)
          return false;
        }
    navigate("/login");
  };
  
  return (
    <div>
      <HomePageScreen title="Reset Password">
        <Form
          formStructure={[
            {
              field: "password",
              label: "new password:",
              placeholder: "new password",
            },
            {
              field: "confirmPassword",
              label: "confirm Password:",
              type: "password",
              placeholder: "confirm Password",
            },
          ]}
          emptyForm={{
            password: "",
            confirmPassword: "",
          }}
          validateFunction={(data) => {
            const validationOut = validateResetPassword(data);
            if (!validationOut.status) return validationOut;
            if (data.password !== data.confirmPassword) {
              return {
                status: false,
                data: [
                  {
                    path: "confirmPassword",
                    message: "Password does not match",
                  },
                ],
              };
            }
            return {
              status: true,
            };
          }}
          onSubmit={OnSubmit}
          formSubmitButtonLabel="Reset"
          commonError={error}
          afterFormSection={<></>}
        />
      </HomePageScreen>
    </div>
  );
};

export default ResetPassword;
