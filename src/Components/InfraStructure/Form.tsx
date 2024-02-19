import { ReactNode } from "react";
import useForm, { ValidationError } from "../../Hooks/useForms";
import { InputFieldType } from "../../Types/PropsTypes";
import { SchemaValidationResponse } from "../../Utils/Validation";
import Button from "../Button";
import InputField from "../Input"

type FormField = {
    field:string;
    label?:string;
    type?:InputFieldType
    placeholder?:string;
}

interface PropsTypes <FormData>{
    emptyForm: FormData,
    defaultValues?: FormData;
    formStructure:FormField[];
    validateFunction: (d:FormData)=>SchemaValidationResponse;
    onSubmit: (data:FormData)=>void;
    formSubmitButtonLabel: string;
    formBackButtonLabel?:string;
    serverError?:ValidationError[];
    afterFormSection?:ReactNode;
    onBack?:()=>void;

}

const Form = <FormData extends Record<string,any>,>({
    emptyForm,
    defaultValues,
    formStructure,
    validateFunction,
    onSubmit,
    serverError,
    formSubmitButtonLabel,
    formBackButtonLabel,
    afterFormSection,
    onBack
}:PropsTypes<FormData>) => {

    const {
        submit,
        formData,
        valid,
        formError,
        onChange
    } = useForm({
        emptyForm,
        defaultValues,
        validateFunction,
        onSubmit,
        serverError
        
        
    })

  return (
    <form className="p-8"
     onSubmit={submit}>
        <div className="grid gap-8">
        {formStructure.map((field)=>
            <InputField 
                {...field}
                key={field.field}
                value={formData[field.field]}
                onChange={(v)=>onChange(field.field,v)}
                error={formError[field.field]}
            />
        )}
        </div>
        {afterFormSection}
        <div className="flex gap-44 pt-2 items-center">
            
        {/* {formBackButtonLabel &&  */}
        {/* <Button
                      label={formBackButtonLabel || ""}
                      onClick={onBack}
                      disabled={!valid}
                      type="Inline" />
                    
        } */}
        <Button 
            label={formSubmitButtonLabel}
            action="submit"
            disabled={!valid}
            type="Primary"
        />
       

        
        
    
    </div>

    </form>
  )
}

export default Form