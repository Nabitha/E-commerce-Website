import React from "react";
import { HomePageScreen } from "../../Components/Screens/HomePageScreen";
import Form from "../../Components/InfraStructure/Form";
import { validateRegister } from "../../Validation";

const ResetPassword = () => {
  return (
    <div>
      <HomePageScreen title="Reset Password">
        <Form
          formStructure={[
            {
              field: "new password",
              label: "new password:",
              placeholder: "new password",
            },
            {
              field: "confirm password",
              label: "confirm Password:",
              type: "password",
              placeholder: "confirm Password",
            },
          ]}
          emptyForm={{
            email: "",
            password: "",
          }}
          validateFunction={validateRegister}
          onSubmit={(d) => console.log(d)}
          formSubmitButtonLabel="Reset"
          afterFormSection={<></>}
        />
      </HomePageScreen>
    </div>
  );
};

export default ResetPassword;
