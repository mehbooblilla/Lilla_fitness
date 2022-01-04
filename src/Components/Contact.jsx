import React from 'react';

function Contact() {
     function showAlert(){
         alert("Thanks for contact us! ")
    }
    return (
        <div id="contact">
            <h1>CONTACT US</h1>
            <form action="">
                <input type="text" placeholder="Full Name" required/>
                <input type="email" placeholder="Type Your Email;" required/>
                <textarea placeholder="Type Your Message Here........" name="message" cols="30" rows="10">

                </textarea>
                <input type="submit" value="Send" onClick={showAlert}/>

            </form>
            
        </div>
    )
}

export default Contact;
