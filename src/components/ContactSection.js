import React from 'react';
import './ContactSection.css'; // Assuming you have CSS for styling

const ContactSection = () => {
  return (
    <div className="contact-section">
      <div className="contact-content">
        <div className="contact-images">
          <img src="Ava.png" alt="Team member 1" className="contact-image" />
          <img src="Ava2.png" alt="Team member 2" className="contact-image" />
          <img src="Ava3.png" alt="Team member 3" className="contact-image" />
        </div>
        <h2>Still have questions?</h2>
        <p>Can't find the answer you're looking for? Please chat to our friendly team.</p>
        <button className="contact-button">Get in touch</button>
      </div>
    </div>
  );
};

export default ContactSection;
