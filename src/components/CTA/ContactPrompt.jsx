import { Phone, Mail, MessageCircle, Calendar } from 'lucide-react';

const ContactPrompt = () => {
  return (
    <section className="contact-prompt">
      <div className="container">
        <div className="prompt-content">
          <div className="prompt-header">
            <h2>Ready to Experience Addis View Hotel?</h2>
            <p>Get in touch with us for bookings, inquiries, or personalized assistance</p>
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
              <a href="/reservations" className="contact-link">
                Make Reservation
              </a>
            </div>
          </div>

          <div className="booking-cta">
            <div className="cta-badge">Special Offer</div>
            <h3>Book Direct & Save 10%</h3>
            <p>Get the best rates when you book directly through our website</p>
            <div className="cta-actions">
              <a href="/reservations" className="cta-button primary">
                Book Your Stay Now
              </a>
              <a href="/contact" className="cta-button secondary">
                Request Custom Quote
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .contact-prompt {
          padding: 4rem 0;
          background: white;
        }

        .prompt-content {
          max-width: 1000px;
          margin: 0 auto;
        }

        .prompt-header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .prompt-header h2 {
          font-size: 2rem;
          font-weight: bold;
          color: #1e293b;
          margin-bottom: 1rem;
        }

        .prompt-header p {
          font-size: 1.125rem;
          color: #64748b;
          line-height: 1.6;
        }

        .contact-options {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
          margin-bottom: 4rem;
        }

        .contact-card {
          background: #f8fafc;
          padding: 2rem;
          border-radius: 1rem;
          text-align: center;
          border: 1px solid #e2e8f0;
          transition: all 0.3s ease;
        }

        .contact-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
          background: white;
        }

        .contact-icon {
          background: linear-gradient(135deg, #eab308, #1e40af);
          width: 4rem;
          height: 4rem;
          border-radius: 1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          margin: 0 auto 1.5rem;
        }

        .contact-card h3 {
          font-size: 1.25rem;
          font-weight: 600;
          color: #1e293b;
          margin-bottom: 0.5rem;
        }

        .contact-card p {
          color: #64748b;
          margin-bottom: 1.5rem;
          line-height: 1.5;
        }

        .contact-link {
          color: #1e40af;
          font-weight: 600;
          text-decoration: none;
          font-size: 1.125rem;
          transition: color 0.2s;
        }

        .contact-link:hover {
          color: #1e3a8a;
          text-decoration: underline;
        }

        .booking-cta {
          background: linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%);
          color: white;
          padding: 3rem 2rem;
          border-radius: 1rem;
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .cta-badge {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: #eab308;
          color: white;
          padding: 0.5rem 1rem;
          border-radius: 2rem;
          font-size: 0.875rem;
          font-weight: 600;
        }

        .booking-cta h3 {
          font-size: 1.5rem;
          font-weight: bold;
          margin-bottom: 1rem;
        }

        .booking-cta p {
          font-size: 1.125rem;
          opacity: 0.9;
          margin-bottom: 2rem;
          max-width: 500px;
          margin-left: auto;
          margin-right: auto;
        }

        .cta-actions {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        .cta-button {
          padding: 1rem 2rem;
          border-radius: 0.75rem;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.2s;
          font-size: 1rem;
        }

        .cta-button.primary {
          background: #eab308;
          color: white;
        }

        .cta-button.primary:hover {
          background: #ca8a04;
          transform: translateY(-2px);
        }

        .cta-button.secondary {
          background: transparent;
          color: white;
          border: 2px solid white;
        }

        .cta-button.secondary:hover {
          background: white;
          color: #1e40af;
          transform: translateY(-2px);
        }

        @media (min-width: 768px) {
          .contact-options {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .contact-options {
            grid-template-columns: repeat(4, 1fr);
          }
        }

        @media (max-width: 768px) {
          .contact-prompt {
            padding: 3rem 0;
          }

          .prompt-header h2 {
            font-size: 1.75rem;
          }

          .contact-card {
            padding: 1.5rem;
          }

          .booking-cta {
            padding: 2rem 1.5rem;
          }

          .cta-actions {
            flex-direction: column;
            align-items: center;
          }

          .cta-button {
            width: 100%;
            max-width: 300px;
          }
        }
      `}</style>
    </section>
  );
};

export default ContactPrompt;