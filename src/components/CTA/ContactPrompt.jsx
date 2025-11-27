import { Phone, Mail, MessageCircle, Calendar, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import './ContactPrompt.css';

const ContactPrompt = () => {
  return (
    <section className="contact-prompt">
      <div className="container">
        <div className="prompt-content">
          <div className="prompt-header">
            <h2>Ready to Experience Premium Hospitality?</h2>
            <p>Discover all our services and amenities designed for your comfort</p>
          </div>

          <div className="cta-buttons">
            <Link to="/services" className="cta-primary">
              <Sparkles size={20} />
              View All Services
            </Link>
            <Link to="/contact" className="cta-secondary">
              Get Custom Quote
            </Link>
          </div>

          <div className="contact-options">
            <div className="contact-card">
              <div className="contact-icon">
                <Phone size={24} />
              </div>
              <h3>Call Us Directly</h3>
              <p>Speak with our hospitality team</p>
              <a href="tel:+251111249766" className="contact-link">
                +251-11-124-97-66
              </a>
            </div>

            <div className="contact-card">
              <div className="contact-icon">
                <Mail size={24} />
              </div>
              <h3>Send an Email</h3>
              <p>Get detailed information and quotes</p>
              <a href="mailto:addisview@ethionet.et" className="contact-link">
                addisview@ethionet.et
              </a>
            </div>

            <div className="contact-card">
              <div className="contact-icon">
                <MessageCircle size={24} />
              </div>
              <h3>Quick Message</h3>
              <p>Chat with us for instant assistance</p>
              <a href="https://wa.me/251911202929" className="contact-link">
                Message on WhatsApp
              </a>
            </div>

            <div className="contact-card">
              <div className="contact-icon">
                <Calendar size={24} />
              </div>
              <h3>Book Online</h3>
              <p>Secure your stay instantly</p>
              <Link to="/reservations" className="contact-link">
                Make Reservation
              </Link>
            </div>
          </div>

          <div className="booking-cta">
            <div className="cta-badge">Special Offer</div>
            <h3>Book Direct & Save 10%</h3>
            <p>Get the best rates when you book directly through our website</p>
            <div className="cta-actions">
              <Link to="/reservations" className="cta-button primary">
                Book Your Stay Now
              </Link>
              <Link to="/contact" className="cta-button secondary">
                Request Custom Quote
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPrompt;