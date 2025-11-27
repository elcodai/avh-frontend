import { Bed, Utensils, Users, Car, Calendar, Star } from 'lucide-react';

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

      <style jsx>{`
        .services-section {
          padding: 4rem 0;
          background: white;
        }

        .services-header {
          text-align: center;
          margin-bottom: 3rem;
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
        }

        .section-title {
          font-size: 2rem;
          font-weight: bold;
          color: #1e293b;
          margin-bottom: 1rem;
        }

        .section-subtitle {
          font-size: 1.125rem;
          color: #64748b;
          line-height: 1.6;
        }

        .services-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
          margin-bottom: 4rem;
        }

        .service-card {
          background: #f8fafc;
          padding: 2rem;
          border-radius: 1rem;
          border: 1px solid #e2e8f0;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .service-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(135deg, #eab308, #1e40af);
        }

        .service-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
          background: white;
        }

        .service-icon {
          background: linear-gradient(135deg, #eab308, #1e40af);
          width: 3rem;
          height: 3rem;
          border-radius: 0.75rem;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          margin-bottom: 1.5rem;
        }

        .service-title {
          font-size: 1.25rem;
          font-weight: 600;
          color: #1e293b;
          margin-bottom: 1rem;
        }

        .service-description {
          color: #64748b;
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }

        .service-features {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 2rem;
        }

        .feature-tag {
          display: flex;
          align-items: center;
          gap: 0.375rem;
          background: #e0f2fe;
          color: #0369a1;
          padding: 0.375rem 0.75rem;
          border-radius: 2rem;
          font-size: 0.875rem;
          font-weight: 500;
        }

        .service-link {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: #1e40af;
          font-weight: 600;
          text-decoration: none;
          transition: gap 0.2s;
        }

        .service-link:hover {
          gap: 0.75rem;
        }

        .link-arrow {
          transition: transform 0.2s;
        }

        .service-link:hover .link-arrow {
          transform: translateX(4px);
        }

        .services-cta {
          background: linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%);
          color: white;
          padding: 3rem 2rem;
          border-radius: 1rem;
          text-align: center;
        }

        .cta-content h3 {
          font-size: 1.5rem;
          font-weight: bold;
          margin-bottom: 1rem;
        }

        .cta-content p {
          font-size: 1.125rem;
          opacity: 0.9;
          margin-bottom: 2rem;
        }

        .cta-buttons {
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
          .services-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .services-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }

        @media (max-width: 768px) {
          .services-section {
            padding: 3rem 0;
          }

          .section-title {
            font-size: 1.75rem;
          }

          .service-card {
            padding: 1.5rem;
          }

          .services-cta {
            padding: 2rem 1.5rem;
          }

          .cta-buttons {
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

export default ServicesOverview;