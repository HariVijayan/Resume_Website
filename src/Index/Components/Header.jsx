import './Header.css'

function Header() {

  return (
    <nav>
            <input type="checkbox" id="ch-navbarstatus"></input>
            <a id="a-websitename" href="#"><b>ResumeQr</b></a>
            <label htmlFor="ch-navbarstatus" id="icon-menu">
               <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 0 24 24" width="40px" fill="#000000">
                  <path d="M0 0h24v24H0z" fill="none"/>
                  <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
               </svg>
            </label>
            <label id="sidebarbackgroundcover" htmlFor="ch-navbarstatus"></label>
            <div id="dv-headerlinks">
               <label htmlFor="ch-navbarstatus" id="icon-closesidebar">
                  <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 0 24 24" width="40px" fill="#000000">
                     <path d="M0 0h24v24H0z" fill="none"/>
                     <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                  </svg>
               </label>
               <a href="#dv-whatresumeqr"><b>What is<br/>ResumeQr?</b></a> 
               <a href="#dv-whyresumeqr"><b>Why<br/> ResumeQr?</b></a>
               <a href="#dv-pricingwrapperinner"><b>Pricing</b></a>
               <a href="#dv-contactwrapperinner"><b>Contact Us</b></a>
               <a href="login.html"><b>Login</b></a>
            </div>
         </nav>
  )
}

export default Header
