import { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Static map image as placeholder - you can replace this with Mapbox later
  const staticMapUrl = "https://maps.googleapis.com/maps/api/staticmap?center=9.0331,38.7501&zoom=15&size=600x400&markers=color:red%7Clabel:H%7C9.0331,38.7501&key=YOUR_API_KEY";

  return (
    <div className="contact-page">
      <div className="container">
        <div className="page-header">
          <h1>Contact Us</h1>
          <p>Get in touch with us for reservations, inquiries, or any assistance you may need</p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <h3>Contact Information</h3>
            <div className="contact-details">
              <div className="contact-item">
                <strong>Address:</strong>
                <p>Arada Sub City, K. 13/14, House No.319<br />P.O.Box 1485 Code 1110<br />Addis Ababa, Ethiopia</p>
              </div>
              <div className="contact-item">
                <strong>Phone:</strong>
                <p>+251-11-124-97-66 / 124-97-67</p>
              </div>
              <div className="contact-item">
                <strong>Email:</strong>
                <p>addisview@ethionet.et</p>
              </div>
              <div className="contact-item">
                <strong>Reception Hours:</strong>
                <p>24/7</p>
              </div>
            </div>

            {/* Map Section */}
            <div className="map-section">
              <h3>Our Location</h3>
              <div className="map-container">
                <div className="static-map">
                  <img 
                    src="/images/map-placeholder.png" 
                    alt="Addis View Hotel Location" 
                    className="map-image"
                  />
                  <div className="map-overlay">
                    <p>📍 Addis View Hotel Location</p>
                    <p>Interactive map coming soon with Mapbox integration</p>
                  </div>
                </div>
                <div className="map-actions">
                  <a 
                    href="https://maps.google.com/?q=9.0331,38.7501" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="map-link"
                  >
                    Open in Google Maps
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form">
            <h3>Send us a Message</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input 
                  type="text" 
                  name="name"
                  placeholder="Your Name" 
                  value={formData.name}
                  onChange={handleChange}
                  required 
                />
              </div>
              <div className="form-group">
                <input 
                  type="email" 
                  name="email"
                  placeholder="Your Email" 
                  value={formData.email}
                  onChange={handleChange}
                  required 
                />
              </div>
              <div className="form-group">
                <input 
                  type="text" 
                  name="subject"
                  placeholder="Subject" 
                  value={formData.subject}
                  onChange={handleChange}
                  required 
                />
              </div>
              <div className="form-group">
                <textarea 
                  name="message"
                  placeholder="Your Message" 
                  rows="5" 
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="submit-btn">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;