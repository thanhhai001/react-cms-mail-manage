import { Outlet } from "react-router-dom"
import Sidebar from "./Sidebar"
import { Suspense, useState } from "react"

const defaultLeftClass : string = 'basis-auto';
const defaultRightPartClass : string = 'basis-auto';

function DefaultLayout() {
  const [navigate, setNavigate] = useState<boolean>(false);
  const [navigateOverlay, setNavigateOverlay] = useState<boolean>(false);
  const handleClickNavigate = () => setNavigate(!navigate)

  const handleClickNavigateOverlay = () => setNavigate(!navigate)

  return (
    <>
      <div className="w-screen w-svw w-lvw w-dvw h-screen h-svh h-lvh h-dvh h-screen h-svh h-lvh h-dvh scroll-smooth">
        <div className="flex flex-row h-full">
          <div className={(navigate ? "hidden" : "absolute top-0 left-0 z-10 w-20 basis-0 lg:z-auto lg:basis-1/4 lg:static") + " bg-slate-50 overflow-auto"}><Sidebar /></div>
          <div className={(navigate ? "basis-full" : "basis-full lg:basis-3/4") + " bg-slate-300 overflow-auto"}>
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
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default DefaultLayout
