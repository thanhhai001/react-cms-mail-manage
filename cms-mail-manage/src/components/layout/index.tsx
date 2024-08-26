import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom"
import Sidebar from "../Sidebar";
import AuthService from "@/modules/authentication/services/authentication";
import { ILoginForm } from "@/core/types";
import { useForm } from "react-hook-form";
import InputField from "@/core/components/inputField";
function DefaultLayout() {
  const { register, formState: { errors} } = useForm<ILoginForm>()
  // const onSubmit: SubmitHandler<ILoginForm> = (data) => console.log(data)
  const auth = new AuthService();
  const [navigate, setNavigate] = useState<boolean>(false);

  const handleClickNavigate = () => {
    auth.login({userName: 'user', password: 'password'});
    setNavigate(! navigate);
  }

  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

console.log(dimensions);
const handleResize = () => {
    setDimensions({
    width: window.innerWidth,
    height: window.innerHeight,
    });
  }
  
  useEffect(() => {
    window.addEventListener("resize", handleResize, false);
  }, []);

  return (
    <>
    <div className="w-screen w-svw w-lvw w-dvw h-screen h-svh h-lvh h-dvh h-screen h-svh h-lvh h-dvh scroll-smooth">
      <div className="flex flex-row h-full">
        
      </div>
    </div>
      {(dimensions?.width >= 1024) && 
        <div className="w-screen w-svw w-lvw w-dvw h-screen h-svh h-lvh h-dvh h-screen h-svh h-lvh h-dvh scroll-smooth">
        <div className="flex flex-row h-full">
          <div className={ navigate ? "hidden" : "" + " basis-1/4 bg-slate-50 overflow-auto"}><Sidebar /></div>
          <div className={navigate ? "basis-full" : "basis-3/4" + " bg-slate-300 overflow-auto"}>
            <nav className="grid grid-cols-4 gap-4 place-content-center h-20 sticky top-0 px-8">
              <div>
                <button
                  onClick={handleClickNavigate}
                  className="px-4 py-2 font-semibold text-sm bg-blue-500 text-white rounded-md shadow-sm hover:scale-110 hover:bg-indigo-500 duration-300 ..."
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                  </svg>
                </button>
              </div>
              <div>
                <InputField label="Test" register={register('userName')} error={errors.userName}></InputField>
              </div>
              <div>icon</div>
              <div>icon</div>
            </nav>
            <div id="page" className="h-96">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
      }
      {(dimensions.width < 1024) &&
        <div className="w-screen w-svw w-lvw w-dvw h-screen h-svh h-lvh h-dvh h-screen h-svh h-lvh h-dvh scroll-smooth">
        <div className="flex flex-row h-full">
          <div className="basis-full bg-slate-300 overflow-auto">
            <nav className="grid grid-cols-4 gap-4 place-content-center h-20 sticky top-0 px-8">
              <div>
                <button
                  className={"px-4 py-2 font-semibold text-sm bg-blue-500 text-white rounded-md shadow-sm" +
                    " transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ..."}
                >
                  Show Navigation
                </button>
              </div>
              <div>icon</div>
              <div>icon</div>
              <div>icon</div>
            </nav>
            <div id="page" className="h-96">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
      }
    </>
  )
}

export default DefaultLayout
