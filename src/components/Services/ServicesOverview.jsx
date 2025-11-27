import { Bed, Utensils, Users, Car, Calendar, Star } from 'lucide-react';
import './ServicesOverview.css';

const ServicesOverview = () => {
  const services = [
    {
      icon: Bed,
      title: "Luxury Accommodation",
      description: "Elegant rooms with panoramic city views, premium amenities, and sophisticated comfort",
      features: ["City View Rooms", "Premium Beds", "24/7 Room Service"],
      link: "/rooms"
    },
    {
      icon: Utensils,
      title: "Fine Dining Experience",
      description: "Restaurant with international cuisine and breathtaking 6th-floor panoramic views",
      features: ["International Menu", "Wine & Spirits", "24hr Room Service"],
      link: "/dining"
    },
    {
      icon: Users,
      title: "Event & Conference",
      description: "Modern facilities for corporate meetings, weddings, and special celebrations",
      features: ["40-60 Capacity", "Full Equipment", "Event Planning"],
      link: "/events"
    },
    {
      icon: Car,
      title: "Premium Transportation",
      description: "Luxury car rentals and airport transfers for seamless travel experience",
      features: ["Airport Transfer", "Luxury Cars", "Chauffeur Service"],
      link: "/services"
    }
  ];

  return (
    <section className="services-section">
      <div className="container">
        <div className="services-header">
          <h2 className="section-title">Premium Hotel Services</h2>
          <p className="section-subtitle">
            Experience world-class hospitality with our comprehensive range of premium services 
            designed for discerning travelers
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">
                <service.icon size={24} />
              </div>
              
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              
              <div className="service-features">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="feature-tag">
                    <Star size={12} />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <a href={service.link} className="service-link">
                Explore {service.title.toLowerCase()}
                <span className="link-arrow">→</span>
              </a>
            </div>
          ))}
        </div>

        <div className="services-cta">
          <div className="cta-content">
            <h3>Ready to Experience Premium Hospitality?</h3>
            <p>Discover all our services and amenities designed for your comfort</p>
            <div className="cta-buttons">
              <a href="/services" className="cta-button primary">
                View All Services
              </a>
              <a href="/contact" className="cta-button secondary">
                Get Custom Quote
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;