import React from 'react';
import { useState } from 'react';
import Footer from './Footer';
import  './Contact.css'

function Contact (){
    const [inputs, setInputs] = useState({});
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
      }
    
      const handleSubmit = (event) => {
        event.preventDefault();
        alert(inputs);
      }
	return (
    <div className='contact-div'>
      <div className=''>
        <h1>Contact Me</h1>
        <p>Hi there, contact me to ask me about anything you have in mind.</p>

        <form onSubmit={handleSubmit}>
          <div className="name__container">
            <div className="detail__container">
              <label className="label" htmlFor="first_name">
                First name
              </label>
              <input
                type="text"
                name="fName"
                id="first_name"
                placeholder="Enter your first name"
                required
              />
            </div>
            <div className="detail__container">
              <label className="label" htmlFor="last_name">
                Last name
              </label>
              <input
                type="text"
                name="lName"
                id="last_name"
                placeholder="Enter your last name"
              />
            </div>
          </div>
          <div className="detail__container">
            <label className="label" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="yourname@email.com"
              required
            />
          </div>
          <div className="detail__container">
            <label className="label" htmlFor="message">
              Message
            </label>
            <textarea
              name="message"
              cols="30"
              rows="10"
              id="message"
              placeholder="Send me a message and I'll reply you as soon as possible..."
            />
          </div>
          <div className="checkbox__container">
            <input type="checkbox" name="agree" /> You agree to providing your
            data to Ian Rioba who may contact you
          </div>
          <button type="submit" id="btn__submit">
            Send Message
          </button>
        </form>
    </div>
    <Footer/>
    </div>
    )
}

export default Contact;
