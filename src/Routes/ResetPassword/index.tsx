import React from "react";
import { HomePageScreen } from "../../Components/Screens/HomePageScreen";
import Form from "../../Components/InfraStructure/Form";
import { validateRegister, validateResetPassword } from "../../Validation";
import { useNavigate } from "react-router-dom";
import { PasswordReset } from "../../Services";

const ResetPassword = () => {
  const navigate = useNavigate();
  const OnSubmit = async (data: any) => {
    console.log("in");
    PasswordReset(data);
    navigate("/products");
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
          afterFormSection={<></>}
        />
      </HomePageScreen>
    </div>
  );
};

export default ResetPassword;
