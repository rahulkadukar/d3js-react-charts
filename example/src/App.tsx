import React from 'react'

import { NavBar } from './Components/Navbar'
import { LineChartDoc } from './Documentation/LineChartDoc'

const App = () => {
  return (
    <div>
      <NavBar><span>D3 charts in React</span></NavBar>
      <LineChartDoc />
    </div>
  )
}

export default App
