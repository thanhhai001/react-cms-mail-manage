import { useForm, SubmitHandler } from "react-hook-form";

type IFormRegister = {
  name: string,
  email: string,
  password: string,
};

const onSubmit: SubmitHandler<IFormRegister> = data => console.log(data);

function App() {
  const { register, formState: { errors }, handleSubmit } = useForm<IFormRegister>();
  return (
    <>
      <div className="bg-gray-100 flex items-center justify-center h-screen">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
          <div className="flex justify-center mb-6">
            <span className="inline-block bg-gray-200 rounded-full p-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4" /></svg>
            </span>
          </div>
          <h2 className="text-2xl font-semibold text-center mb-4">Create a new account</h2>
          <p className="text-gray-600 text-center mb-6">Enter your details to register.</p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-2">
              <label className="block text-gray-700 text-sm font-semibold mb-2">Full Name *</label>
              <input
                {...register("name", { required: true })}
                type="text"
                placeholder="James Brown"
                className="form-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500"
              />
              <div className={'text-[#FAA0A0] ml-4 ' + (errors.name ? '' : 'invisible')}>{(errors.name && "name is required") ?? 'error'}</div>
            </div>
            <div className="mb-2">
              <label className="block text-gray-700 text-sm font-semibold mb-2">Email Address *</label>
              <input
                {...register("email", { required: true })}
                type="email"
                placeholder="hello@alignui.com"
                className="form-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500"
              />
              <div className={'text-[#FAA0A0] ml-4 ' + (errors.email ? '' : 'invisible')}>{(errors.email && "email is required") ?? 'error'}</div>
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-semibold mb-2">Password *</label>
              <input
                {...register("password", { required: true })}
                type="password"
                placeholder="••••••••"
                className="form-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500"
              />
              <div className={'text-[#FAA0A0] ml-4 ' + (errors.password ? '' : 'invisible')}>{(errors.password && "password is required") ?? 'error'}</div>
              <p className="text-gray-600 text-xs mt-1">Must contain 1 uppercase letter, 1 number, min. 8 characters.</p>
            </div>
            <button type="submit" className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">Register</button>
            <p className="text-gray-600 text-xs text-center mt-4">
              By clicking Register, you agree to accept Apex Financial's
              <a href="#" className="text-blue-500 hover:underline">Terms and Conditions</a>.
            </p>
          </form>
        </div>
      </div>
    </>
  );
}

export default App
