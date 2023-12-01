import { Outlet, useLocation } from 'react-router-dom';
import Navbar from "./Hooks/Navbar"
import Footer from './Hooks/Footer';
import HomePage from './Pages/HomePage/HomePage';
import "./main.css"

function App() {
  useLocation();

  document.title = "Free Market";

  const isHomePage = location.pathname === "/";

  return (
    <div className='html'>
      <Navbar/>
      {isHomePage && <HomePage />}
      <Outlet />
      <Footer />
    </div>
  )
}

export default App