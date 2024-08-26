import { useForm, SubmitHandler } from "react-hook-form"
import { ILoginForm } from "../types"
interface IFormInput {
  firstName: string
  gender: boolean
}
const { register, handleSubmit } = useForm<IFormInput>()
const onSubmit: SubmitHandler<ILoginForm> = (data) => console.log(data)

export { register, handleSubmit, errors, onSubmit}