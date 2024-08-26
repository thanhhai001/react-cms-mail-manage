import { FieldError, UseFormRegisterReturn } from "react-hook-form";

interface InputFieldProps {
  label?: string;
  register: UseFormRegisterReturn,
  error: FieldError|undefined
}

export default function InputField(props:InputFieldProps) {
  
  return (
  <>  
    { props.label && <label>{ props.label }</label>}
    <input {...props.register} />
    { props.error && <label>error: { props.error.message }</label>}
  </>
  )
}