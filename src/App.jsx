import { Outlet, useLocation, Link } from 'react-router-dom';
import Navbar from "./Hooks/Navbar"


function App() {
  useLocation();

  const isHomePage = location.pathname === "/";

  return (
    <>
      <Navbar/>
      {isHomePage && (
        <div>
          <h1>Welcome to E-commerce!</h1>
          <p>Take a look at our full product catalog or browse through the different sections of our marketplace.</p>
          <Link to="shop">Shop</Link>
        </div>
      )}
      <Outlet />
    </>
  )
}

export default App