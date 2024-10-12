import { useState } from 'react'
import './App.css'
import "bootstrap/dist/css/bootstrap.css"

import Sidebar from "././components/Sidebar.jsx";
import Dashboard from "././components/Dashboard.jsx";
import {Route, Routes} from "react-router-dom";
import Home from "././components/Home.jsx";
import Settings from '././components/Settings.jsx';
import Chat from '././components/Chat.jsx';

function App() {

  return (
      <div className="app">
         <Routes>
             <Route path="/" element={<Home />} />
             <Route path="/sidebar/" element={<Sidebar />} >
                 <Route path="/sidebar/dashboard" element={<Dashboard/>}/>
                 <Route path="/sidebar/settings" element={<Settings/>}/>
                 <Route path="/sidebar/chat" element={<Chat/>}/>
             </Route>

         </Routes>



      </div>
  )
}

export default App
