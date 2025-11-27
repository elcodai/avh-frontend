import { Wifi, Car, Shirt, Coffee, Users, Phone, MessageCircle, Heart } from 'lucide-react';

const AmenitiesHighlights = () => {
  const amenities = [
    {
      icon: Wifi,
      title: "24/7 High-Speed Wi-Fi",
      description: "Complimentary high-speed internet throughout the hotel",
      category: "connectivity"
    },
    {
      icon: Car,
      title: "Airport Transfer Service",
      description: "Complimentary transport to and from Bole International Airport",
      category: "transport"
    },
    {
      icon: Shirt,
      title: "Laundry & Dry Cleaning",
      description: "Professional laundry services with quick turnaround",
      category: "services"
    },
    {
      icon: Coffee,
      title: "Coffee & Wine Bar",
      description: "Elegant bar serving premium coffee and fine wines",
      category: "dining"
    },
    {
      icon: Users,
      title: "Conference Facilities",
      description: "Modern meeting spaces for 40-60 participants",
      category: "business"
    },
    {
      icon: Phone,
      title: "24-Hour Reception",
      description: "Round-the-clock concierge and front desk service",
      category: "services"
    },
    {
      icon: MessageCircle,
      title: "Business Center",
      description: "Complete office facilities with printing and fax services",
      category: "business"
    },
    {
      icon: Heart,
      title: "Wellness Services",
      description: "Special attention to your comfort and well-being",
      category: "wellness"
    }
  ];

  const categories = {
    connectivity: { name: "Connectivity", color: "#3b82f6" },
    transport: { name: "Transport", color: "#ef4444" },
    services: { name: "Services", color: "#8b5cf6" },
    dining: { name: "Dining", color: "#f59e0b" },
    business: { name: "Business", color: "#10b981" },
    wellness: { name: "Wellness", color: "#ec4899" }
  };

  return (
    <section className="amenities-section">
      <div className="container">
        <div className="amenities-header">
          <h2 className="section-title">Premium Amenities & Facilities</h2>
          <p className="section-subtitle">
            Experience unparalleled comfort with our world-class amenities designed 
            to make your stay exceptional and memorable
          </p>
        </div>

        <div className="amenities-grid">
          {amenities.map((amenity, index) => (
            <div 
              key={index} 
              className="amenity-card"
              style={{ 
                '--category-color': categories[amenity.category].color 
              }}
            >
              <div className="amenity-header">
                <div 
                  className="amenity-icon"
                  style={{ backgroundColor: categories[amenity.category].color }}
                >
                  <amenity.icon size={20} />
                </div>
                <span 
                  className="category-tag"
                  style={{ 
                    backgroundColor: `${categories[amenity.category].color}15`,
                    color: categories[amenity.category].color
                  }}
                >
                  {categories[amenity.category].name}
                </span>
              </div>

              <h3 className="amenity-title">{amenity.title}</h3>
              <p className="amenity-description">{amenity.description}</p>

              <div className="amenity-cta">
                <span className="availability">Available</span>
                <div className="cta-indicator">→</div>
              </div>
            </div>
          ))}
        </div>

        <div className="amenities-cta">
          <div className="cta-card">
            <div className="cta-content">
              <h3>Discover All Our Premium Facilities</h3>
              <p>
                From luxurious limousine rentals to comprehensive conference support, 
                explore our full range of services designed for your comfort and convenience
              </p>
              <div className="cta-features">
                <div className="feature">✓ Luxury Car Rentals</div>
                <div className="feature">✓ Sound System Hire</div>
                <div className="feature">✓ Catering Services</div>
                <div className="feature">✓ Day Care Service</div>
              </div>
            </div>
            <div className="cta-actions">
              <a href="/amenities" className="cta-button primary">
                View All Amenities
              </a>
              <a href="/contact" className="cta-button secondary">
                Inquire About Services
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .amenities-section {
          padding: 4rem 0;
          background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
        }

        .amenities-header {
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

        .amenities-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
          margin-bottom: 4rem;
        }

        .amenity-card {
          background: white;
          padding: 1.5rem;
          border-radius: 1rem;
          border: 1px solid #e2e8f0;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .amenity-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 4px;
          height: 100%;
          background: var(--category-color);
          transition: width 0.3s ease;
        }

        .amenity-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
        }

        .amenity-card:hover::before {
          width: 6px;
        }

        .amenity-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 1rem;
        }

        .amenity-icon {
          width: 3rem;
          height: 3rem;
          border-radius: 0.75rem;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
        }

        .category-tag {
          padding: 0.25rem 0.75rem;
          border-radius: 2rem;
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .amenity-title {
          font-size: 1.125rem;
          font-weight: 600;
          color: #1e293b;
          margin-bottom: 0.75rem;
          line-height: 1.4;
        }

        .amenity-description {
          color: #64748b;
          line-height: 1.5;
          margin-bottom: 1.5rem;
          font-size: 0.95rem;
        }

        .amenity-cta {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 1rem;
          border-top: 1px solid #f1f5f9;
        }

        .availability {
          color: #059669;
          font-size: 0.875rem;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 0.375rem;
        }

        .availability::before {
          content: '';
          width: 0.5rem;
          height: 0.5rem;
          background: #10b981;
          border-radius: 50%;
          display: inline-block;
        }

        .cta-indicator {
          color: #94a3b8;
          font-weight: bold;
          transition: transform 0.2s, color 0.2s;
        }

        .amenity-card:hover .cta-indicator {
          transform: translateX(4px);
          color: var(--category-color);
        }

        .amenities-cta {
          max-width: 800px;
          margin: 0 auto;
        }

        .cta-card {
          background: white;
          padding: 3rem;
          border-radius: 1rem;
          box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
          text-align: center;
        }

        .cta-content h3 {
          font-size: 1.5rem;
          font-weight: bold;
          color: #1e293b;
          margin-bottom: 1rem;
        }

        .cta-content p {
          color: #64748b;
          line-height: 1.6;
          margin-bottom: 2rem;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .cta-features {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 0.75rem;
          margin-bottom: 2rem;
          max-width: 400px;
          margin-left: auto;
          margin-right: auto;
        }

        .feature {
          color: #059669;
          font-weight: 500;
          text-align: left;
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
          background: #1e40af;
          color: white;
        }

        .cta-button.primary:hover {
          background: #1e3a8a;
          transform: translateY(-2px);
        }

        .cta-button.secondary {
          background: transparent;
          color: #1e40af;
          border: 2px solid #1e40af;
        }

        .cta-button.secondary:hover {
          background: #1e40af;
          color: white;
          transform: translateY(-2px);
        }

        @media (min-width: 640px) {
          .amenities-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .amenities-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }

        @media (max-width: 768px) {
          .amenities-section {
            padding: 3rem 0;
          }

          .section-title {
            font-size: 1.75rem;
          }

          .cta-card {
            padding: 2rem 1.5rem;
          }

          .cta-features {
            grid-template-columns: 1fr;
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

        @media (max-width: 480px) {
          .amenity-card {
            padding: 1.25rem;
          }

          .amenity-header {
            flex-direction: column;
            gap: 0.75rem;
            align-items: flex-start;
          }

          .category-tag {
            align-self: flex-start;
          }
        }
      `}</style>
    </section>
  );
};

export default AmenitiesHighlights;