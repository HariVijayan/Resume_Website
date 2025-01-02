import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './main.css'
import Buttons from '../Login/Components/Buttons.jsx'

createRoot(document.getElementById('loginbodywrapper')).render(
  <StrictMode>
    <Buttons />
  </StrictMode>,
)
