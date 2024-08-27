import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import About from "./components/About"
import Dashboard from "./components/Dashboard"
import PageNotFound from "./components/PageNotFound"
import DefaultLayout from "./components/layout/index.tsx"
import Login from "./modules/authentication/components/Login.tsx"

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/login" element={ <Login />} />
          <Route path="/" element={ <DefaultLayout /> }>
            <Route path="/home" element={ <Home /> } />
            <Route path="/about" element={ <About /> } />
            <Route path="/dashboard" element={ <Dashboard /> } />
          </Route>
          <Route path="*" element={<PageNotFound />}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App
