import { useState } from 'react'
import './App.css'
import "bootstrap/dist/css/bootstrap.css"

import Sidebar from "./dashboard/Sidebar.jsx";
import Dashboard from "./dashboard/Dashboard.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
      <div className="app">
        <Sidebar/>
          <div style={{width:"100%"}}>
              <Dashboard/>
          </div>

      </div>
  )
}

export default App
