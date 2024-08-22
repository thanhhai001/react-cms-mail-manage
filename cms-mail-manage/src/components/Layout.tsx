import { Outlet } from "react-router-dom"
import Sidebar from "./Sidebar"
import { Suspense, useState } from "react"

function DefaultLayout() {
  const [navigate, setNavigate] = useState<boolean>(false);
  const handleClickNavigate = () => setNavigate(!navigate)

  return (
    <>
      <div className="w-screen w-svw w-lvw w-dvw h-screen h-svh h-lvh h-dvh h-screen h-svh h-lvh h-dvh">
        <div className="flex flex-row h-full">
          <div className={(navigate ? "hidden" : "basis-1/4") + " bg-slate-50 scroll-smooth overflow-auto"}><Sidebar /></div>
          <div className={(navigate ? "basis-full" : "basis-3/4") + " bg-slate-300 scroll-smooth overflow-auto"}>
            <nav className="grid grid-cols-4 gap-4 place-content-center h-20 sticky top-0 px-8">
              <div>
                <button
                  onClick={handleClickNavigate}
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
              <div className="h-96"> HHHH</div>
              <div className="h-96"> HHHH</div>
              <div className="h-96"> HHHH</div>
              <div className="h-96"> HHHH</div>
              <div className="h-96"> HHHH</div>
              <div className="h-96"> HHHH</div>
              <div className="h-96"> HHHH</div>
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default DefaultLayout
