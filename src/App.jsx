import React from 'react'
import './App.css'
import './responsive.css'
import FrontPage from './Components/FrontPage'
import MyTodoApp from './Components/MyTodoApp'
import { Route, Routes } from 'react-router-dom'


export default function App() {
  return (
    <div className="main-wrapper">
         <Routes>
<Route path='/' element={<FrontPage />}></Route>
<Route path='/MyTodoApp' element={<MyTodoApp />}></Route>
         </Routes>
    </div>
  )
}
