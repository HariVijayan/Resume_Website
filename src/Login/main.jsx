import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './main.css'
import Header from '../Index/Components/Header.jsx'

createRoot(document.getElementById('loginbodywrapper')).render(
  <StrictMode>
    <Header />
  </StrictMode>,
)
