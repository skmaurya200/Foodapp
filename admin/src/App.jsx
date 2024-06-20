import React from 'react'
import Navbar from './Components/Sidebar/Navbar/Navbar'
import Sidebar from './Components/Sidebar/Sidebar'
import {Route, Routes} from "react-router-dom"
import Add from './Pages/Add/Add'
import LIst from './Pages/List/LIst'
import Orders from './Pages/Orders/Orders'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const App = () => {

    const url="http://localhost:4000";


  return (
    <div>
      
      <Navbar/>
      <hr />
      <div className="app-content">
        <Sidebar/>
        <Routes>
          <Route path="/add" element={<Add url={url}/>}/>
          <Route path="/list" element={<LIst url={url}/>}/>
          <Route path="/orders" element={<Orders url={url}/>}/>
        </Routes>
        <ToastContainer/>
      </div>
    </div>
  )
}

export default App
