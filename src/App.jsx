import { Outlet, useLocation } from 'react-router-dom';
import Navbar from "./Hooks/Navbar"


function App() {
  useLocation();

  return (
    <>
      <Navbar/>
      <Outlet />
    </>
  )
}

export default App