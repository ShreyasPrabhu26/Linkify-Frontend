import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LogIn from './pages/LogIn.jsx'
import SignIn from './pages/SignIn.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}></Route>
        <Route path='/login' element={<LogIn />}></Route>
        <Route path='/signin' element={<SignIn />}></Route>
        <Route path='*' element={<div>Not Found</div>}></Route>
      </Routes>

    </BrowserRouter>
  </StrictMode>,
)
