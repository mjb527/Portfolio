import React from 'react';
import "./contact.css"

function Contact() {

  return(
    <div className="w-100 d-flex justify-content-center mt-5 h-80">
      <div>
        <div className="mb-5">
          <h2>Interested in contacting me?</h2>
          <h4>Here's some ways you can get in touch!</h4>
        </div>

        { /* telephone number */ }
        {/* if on mobile make telephone link. else, plain text*/}
        { renderPhone() }


        { /* email address, will open mail client */ }
        <div className="mb-4">
          <h6>Email: <a href="mailto:mbatko0914@gmail.com">mbatko0914@gmail.com</a></h6>
        </div>

        { /* linkedin */ }
        <div className="mb-4">
          <h6>LinkedIn: <a href="https://linkedin.com/in/matthew-batko">https://linkedin.com/in/matthew-batko</a></h6>
        </div>

        { /* github */ }
        <div className="mb-4">
          <h6>Github: <a href="https://github.com/mjb527">mjb527</a></h6>
        </div>

      </div>
    </div>
  );

}

function renderPhone() {
  /* check if they are using a mobile device, create anchor if true */
  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    return <div className="my-4"><h5 className="d-inline">Telephone: <a href="tel:7324214586">(732) - 421 - 4586</a></h5> <br/><i>Please let a voicemail if you call me, thanks!</i></div>
  }
  else {
    return <div className="my-4"><h6 className="d-inline">Telephone: (732) - 421 - 4586</h6><br/><i>Please let a voicemail if you call me, thanks!</i></div>
  }
}

export default Contact;
