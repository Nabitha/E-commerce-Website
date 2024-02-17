import { Navigate } from "react-router-dom";
import Form from "../../Components/InfraStructure/Form";

import { validateRegister } from "../../Validation"

const Home = () => {
  return (
    <div className="form-container">
      <Form
        formStructure={[
          {
            field: "name",
            label: "Name"
          },
          {
            field: "email",
            label: "Email"
          },
          {
            field: "phone",
            label: "Phone"
          }
        ]}
        emptyForm={{
          name: "",
          email: "",
          phone: ""
        }}
        validateFunction={validateRegister}
        onSubmit={(d) => console.log(d)} formSubmitButtonLabel={""} onBack={function (): void {
          throw new Error("Function not implemented.");
        } }         />
    </div>
  )
  
}

export default Home