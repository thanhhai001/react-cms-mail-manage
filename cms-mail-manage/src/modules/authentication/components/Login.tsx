// import from 

import { SubmitHandler, useForm } from "react-hook-form"
import { ILoginForm } from "../types"
import FieldBase from "@/core/components/FieldBase"
import AuthService from "../services/authentication"
import useGlobalDOMEvents from "@/core/hooks/useGlobalDOMEvents";

export default function Login() {
  useGlobalDOMEvents({
    keyup: (event: KeyboardEventInit) => handleKeyUp(event)
  });

  // trigger submit form when Enter
  const handleKeyUp = (e: KeyboardEventInit) => {
    if (e.key === 'Enter') trigger()
  }

  const service = new AuthService();
  const { register, trigger, formState: { errors }, handleSubmit } = useForm<ILoginForm>()
  const onSubmit: SubmitHandler<ILoginForm> = async (data) => {
    const resp = await service.login(data);
    console.log(resp);
    
    // if (resp.status === 200) {
    //   console.log(resp);
    // }
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex justify-center h-screen w-screen items-center">
          <div className="w-full md:w-1/2 flex flex-col items-center " >
            <h1 className="text-center text-2xl font-bold text-gray-600 mb-6">LOGIN</h1>
            <div className="w-3/4 mb-6">
              <FieldBase label="User Name" register={register('userName', { required: "required" })} errorMessage={errors.userName?.message} />
            </div>
            <div className="w-3/4 mb-6">
              <FieldBase label="Password" register={register('password', { required: "required" })} errorMessage={errors.password?.message} />
            </div>
            <div className="w-3/4 flex flex-row justify-between">
              <div className=" flex items-center gap-x-1">
                <input type="checkbox" name="remember" id="" className=" w-4 h-4  " />
                <label className="text-sm text-slate-400">Remember me</label>
              </div>
              <div>
                <a href="#" className="text-sm text-slate-400 hover:text-blue-500">Forgot?</a>
              </div>
            </div>
            <div className="w-3/4 mt-4">
              <button type="submit" className="py-4 bg-blue-400 w-full rounded text-blue-50 font-bold hover:bg-blue-700"> LOGIN</button>
            </div>
          </div>
        </div>
      </form>
    </>
  )
}