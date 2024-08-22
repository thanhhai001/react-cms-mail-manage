import { Link } from "react-router-dom"
function PageNotFound() {
  return (
    <>
    <h1> 404 Page Not Found</h1>
    <Link to='/'><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">{ 'Back To Home >.<!'}</button></Link>
    </>
  )
}

export default PageNotFound
