import './Contact.css'

function Contact() {

  return (
    <div id="dv-contactwrapper">
        <h2 id="h2-contactus">Contact Us</h2>
        <div id="dv-contactwrapperinner">
          <p id="p-contactus">For any further queries/questions/concerns, please reach out to us using any of the options given below.</p>
          <div id="dv-contactoptions">
            <div id="dv-address">
              <h3 id="h3-address">Address</h3>
              <h4 id="h4-address">123, ABC Street, <br/>SomeTown, SomeCity, <br/>NewState, India - 600001.</h4>
            </div>
            <div id="dv-othercontactoptions">
              <h4 id="h4-email" className="othercontactopt">exampleemail@example.com</h4>
              <h4 id="h4-phoneno" className="othercontactopt">+91 - 9876543210</h4>
              <h4 id="h4-fb" className="othercontactopt">facebook.com/resumeqr</h4>
              <h4 id="h4-twitter" className="othercontactopt">x.com/resumeqr</h4>
              <h4 id="h4-insta" className="othercontactopt">instagram.com/resumeqr</h4>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Contact
