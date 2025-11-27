import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram, Youtube, MessageCircle, Send } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook", color: "hover:text-blue-600" },
    { icon: Twitter, href: "#", label: "X (Twitter)", color: "hover:text-gray-800" },
    { icon: Instagram, href: "#", label: "Instagram", color: "hover:text-pink-600" },
    { icon: Youtube, href: "#", label: "YouTube", color: "hover:text-red-600" },
    { icon: MessageCircle, href: "#", label: "WhatsApp", color: "hover:text-green-500" },
    { icon: Send, href: "#", label: "Telegram", color: "hover:text-blue-400" }
  ];

  const handleNewsletter = (e) => {
    e.preventDefault();
    // Add newsletter subscription logic here
    console.log('Newsletter subscription handled');
  };

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-main">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <div className="brand-logo">
                <div className="logo-icon" aria-hidden="true">AVH</div>
                <div className="logo-text">
                  <h3>Addis View Hotel</h3>
                  <p>Luxury & City Views</p>
                </div>
              </div>
              <p className="brand-description">
                Experience unparalleled luxury with magnificent panoramic views of Addis Ababa. 
                Your perfect stay awaits in the heart of Ethiopia's vibrant capital.
              </p>
              
              {/* Contact Information - No Box */}
              <div className="contact-info">
                <div className="contact-item">
                  <MapPin size={16} aria-hidden="true" />
                  <span>
                    Arada Sub City, K. 13/14, House No.319<br />
                    P.O.Box 1485 Code 1110<br />
                    Addis Ababa, Ethiopia
                  </span>
                </div>
                <div className="contact-item">
                  <Phone size={16} aria-hidden="true" />
                  <span>
                    Tel: +251-11-124-97-66 / 124-97-67<br />
                    Mobile: +251-91-340-29-54 / 340-29-55<br />
                    Mobile: +251-91-120-88-29 / 145-76-89<br />
                    Fax: +251-11-124-97-65
                  </span>
                </div>
                <a href="mailto:addisview@ethionet.et" className="contact-item">
                  <Mail size={16} aria-hidden="true" />
                  <span>addisview@ethionet.et</span>
                </a>
                <div className="contact-item">
                  <Clock size={16} aria-hidden="true" />
                  <span>24/7 Reception & Services</span>
                </div>
              </div>
            </div>

            <div className="footer-links">
              <div className="link-group">
                <h4>Explore</h4>
                <Link to="/rooms">Rooms & Suites</Link>
                <Link to="/dining">Dining</Link>
                <Link to="/amenities">Amenities</Link>
                <Link to="/events">Events</Link>
                <Link to="/gallery">Gallery</Link>
              </div>

              <div className="link-group">
                <h4>Services</h4>
                <Link to="/reservations">Book a Room</Link>
                <Link to="/dining">Restaurant</Link>
                <Link to="/events">Conference Facilities</Link>
                <Link to="/events">Wedding Planning</Link>
                <Link to="/amenities">Airport Transfer</Link>
              </div>

              <div className="link-group">
                <h4>Support</h4>
                <Link to="/contact">Contact Us</Link>
                <a href="#faq">FAQ</a>
                <a href="#privacy">Privacy Policy</a>
                <a href="#terms">Terms of Service</a>
                <a href="#sitemap">Site Map</a>
              </div>

              <div className="link-group">
                <h4>Connect</h4>
                <div className="social-links">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className={`social-link ${social.color}`}
                      aria-label={social.label}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <social.icon size={20} aria-hidden="true" />
                    </a>
                  ))}
                </div>
                <div className="newsletter">
                  <h5>Stay Updated</h5>
                  <p>Get special offers and updates</p>
                  <form onSubmit={handleNewsletter} className="newsletter-form">
                    <input 
                      type="email" 
                      placeholder="Enter your email" 
                      aria-label="Email for newsletter"
                      required
                    />
                    <button type="submit">Subscribe</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <div className="bottom-content">
            <p>&copy; {currentYear} Addis View Hotel. All rights reserved.</p>
            <p>Designed with <span aria-label="love">❤️</span> for exceptional hospitality</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;