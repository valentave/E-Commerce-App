import { useEffect, useState } from "react"
import { Link, Outlet, useLocation } from 'react-router-dom';
import Navbar from "./Hooks/Navbar"

function App() {
  const location = useLocation();

  return (
    <>
      <Navbar/>
      <Outlet />
    </>
  )
}

export default App
