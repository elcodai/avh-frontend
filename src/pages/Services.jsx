import { Link } from 'react-router-dom';
import './Services.css';

const Services = () => {
  const premiumServices = [
    {
      icon: "🎯",
      title: "Conference & Events",
      description: "Professional meeting spaces for 40-60 participants with modern equipment and specialist assistants.",
      features: ["Business Meetings", "Corporate Events", "Weddings", "Conference Equipment"]
    },
    {
      icon: "🚗",
      title: "Premium Transport",
      description: "Luxurious limousines and Mercedes vehicles for VIP events and airport transfers.",
      features: ["Luxury Limousines", "Mercedes Fleet", "Airport Transfer", "With/Without Driver"]
    },
    {
      icon: "🍽️",
      title: "Fine Dining & Catering",
      description: "Exceptional culinary experiences in our restaurant, bar, and through our catering services.",
      features: ["Restaurant Dining", "Coffee & Wine Bar", "Catering Services", "Room Service"]
    },
    {
      icon: "💼",
      title: "Business Solutions",
      description: "Complete business support with modern technology and professional assistance.",
      features: ["24/7 WiFi & Internet", "Fax & Printing", "Business Center", "Conference Support"]
    },
    {
      icon: "🎵",
      title: "Event Equipment",
      description: "Professional sound systems and equipment rental for any occasion.",
      features: ["Sound Systems", "Event Equipment", "Technical Support", "Setup Assistance"]
    },
    {
      icon: "👑",
      title: "VIP Services",
      description: "Personalized services ensuring every guest experiences luxury and convenience.",
      features: ["Concierge", "Laundry Service", "Day Care", "Security"]
    }
  ];

  return (
    <div className="services-page">
      <div className="container">
        <div className="page-header">
          <h1>Premium Hotel Services</h1>
          <p>Experience unparalleled hospitality with our carefully curated selection of premium services designed for discerning guests</p>
        </div>

        <div className="services-intro">
          <p>
            At Addis View Hotel, we present you with a selected range of services aimed at providing casual hospitality 
            in a well-designed, contemporary environment where every guest is treated like royalty. Our premium services 
            are designed to ensure your stay is both productive and luxurious.
          </p>
        </div>

        <div className="services-grid">
          {premiumServices.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>{feature}</li>
                ))}
              </ul>
              <div className="service-actions">
                <Link to="/contact" className="inquiry-btn">Get Information</Link>
                {service.title === "Conference & Events" && (
                  <Link to="/events" className="details-btn">View Details</Link>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="cta-section">
          <div className="cta-content">
            <h2>Ready to Experience Premium Hospitality?</h2>
            <p>Contact us to discuss your specific needs and get a customized service package</p>
            <div className="cta-buttons">
              <Link to="/contact" className="cta-primary">Get Custom Quote</Link>
              <Link to="/amenities" className="cta-secondary">View All Amenities</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;