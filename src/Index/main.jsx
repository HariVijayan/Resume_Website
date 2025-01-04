import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './main.css'
import Header from '../Index/Components/Header.jsx'
import Branding from './Components/Branding.jsx'
import WhatAndWhy from './Components/WhatAndWhy.jsx'
import Pricing from './Components/Pricing.jsx'
import Contact from './Components/Contact.jsx'
import Footer from './Components/Footer.jsx'

createRoot(document.getElementById('indexbodywrapper')).render(
  <StrictMode>
    <Header />
    <Branding/>
    <WhatAndWhy/>
    <Pricing/>
    <Contact/>
    <Footer/>
  </StrictMode>,
)
