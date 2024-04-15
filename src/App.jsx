import { Routes, Route, BrowserRouter } from "react-router-dom"
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Echo from "./pages/Echo"
import About from "./pages/About"
import Home from "./pages/Home"
import Layout from "./components/Layout"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
       <Routes>
         <Route element={<Layout />} >
           <Route path="/" element={<Home />} />
           <Route path="about" element={<About />} />
           <Route path="echo" element={<Echo />} />
         </Route>
       </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
