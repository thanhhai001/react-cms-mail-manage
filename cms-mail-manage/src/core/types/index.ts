import { FieldError, UseFormRegisterReturn } from "react-hook-form"

export interface ILoginForm {
  userName: string,
  password: string
}

export interface IPropFieldBase {
  label: string,
  placeholder?: string
  register: UseFormRegisterReturn,
  errorMessage: string | undefined
}
export interface IPropFieldLable {
  title: string,
  color: string,
  errorMessage: string | undefined
}

export interface IPropFieldInput {
  outline: string | undefined,
  placeholder?: string
  register: UseFormRegisterReturn,
}
