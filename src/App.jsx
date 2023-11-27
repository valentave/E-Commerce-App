import { Outlet, useLocation, Link } from 'react-router-dom';
import Navbar from "./Hooks/Navbar"
import Footer from './Hooks/Footer';
import HomePage from './Pages/HomePage/HomePage';

function App() {
  useLocation();

  const isHomePage = location.pathname === "/";

  return (
    <>
      <Navbar/>
      {isHomePage && <HomePage />}
      <Outlet />
      <Footer />
    </>
  )
}

export default App