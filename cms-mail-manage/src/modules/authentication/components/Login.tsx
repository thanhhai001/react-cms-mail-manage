// import from 

import { SubmitHandler, useForm } from "react-hook-form"
import { ILoginForm } from "../types"

export default function Login() {
  const { register, formState: { errors }, handleSubmit } = useForm<ILoginForm>()
  const onSubmit: SubmitHandler<ILoginForm> = (data) => console.log(data)
  
    return (
        <>
        </>
    )
}