import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div className="contact-section" id="Contact">
    <h2 className="contact-title">Contact</h2>
    <p className="contact-subtitle"> WELCOME!</p>

    <form className="contact-form" action="https://formspree.io/f/myzjvnov" method="POST">
      <input type="text" name="name" placeholder="Your Name" required />
      <input type="email" name="email" placeholder="Your Email" required />
      <textarea name="message" rows="5" placeholder="Your Message" required />
      <button type="submit">Send Message</button>
    </form>
  </div>
  )
}

export default Contact