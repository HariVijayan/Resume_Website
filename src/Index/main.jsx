import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './main.css'
import Header from './Components/Header.jsx'

createRoot(document.getElementById('indexbodywrapper')).render(
  <StrictMode>
    <Header />
  </StrictMode>,
)