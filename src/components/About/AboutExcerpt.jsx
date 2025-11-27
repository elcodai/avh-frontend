import { MapPin, Navigation, Landmark } from 'lucide-react';

const AboutExcerpt = () => {
  return (
    <section className="about-section">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="section-title">Experience Ethiopian Elegance</h2>
            <p className="about-description">
              Perched in the vibrant, mountainous capital of Addis Ababa, Addis View Hotel 
              embodies the rich heritage and timeless sophistication of Ethiopia. Discover 
              unparalleled hospitality where modern luxury meets authentic cultural charm.
            </p>
            
            <div className="location-features">
              <div className="feature-item">
                <div className="feature-icon">
                  <Navigation size={20} />
                </div>
                <div className="feature-content">
                  <h3>Prime Location</h3>
                  <p>Just 7 km from Bole International Airport (ADD) on the main Arat Kilo to Megenagna route</p>
                </div>
              </div>
              
              <div className="feature-item">
                <div className="feature-icon">
                  <Landmark size={20} />
                </div>
                <div className="feature-content">
                  <h3>Cultural Gateway</h3>
                  <p>Steps away from the historic Grand Palace and Addis Ababa's most significant landmarks</p>
                </div>
              </div>
              
              <div className="feature-item">
                <div className="feature-icon">
                  <MapPin size={20} />
                </div>
                <div className="feature-content">
                  <h3>Panoramic Views</h3>
                  <p>Magnificent cityscape vistas from our elevated location in the heart of the capital</p>
                </div>
              </div>
            </div>
            
            <div className="about-cta">
              <button className="cta-button primary">
                Discover Our Story
              </button>
              <button className="cta-button secondary">
                View Photo Gallery
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .about-section {
          padding: 4rem 0;
          background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
        }

        .about-content {
          max-width: 800px;
          margin: 0 auto;
        }

        .section-title {
          font-size: 2rem;
          font-weight: bold;
          color: #1e293b;
          text-align: center;
          margin-bottom: 1.5rem;
          line-height: 1.2;
        }

        .about-description {
          font-size: 1.125rem;
          line-height: 1.7;
          color: #475569;
          text-align: center;
          margin-bottom: 3rem;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .location-features {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          margin-bottom: 3rem;
        }

        .feature-item {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          padding: 1.5rem;
          background: white;
          border-radius: 1rem;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
          transition: transform 0.2s, box-shadow 0.2s;
        }

        .feature-item:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 15px -3px rgba(0, 0, 0, 0.1);
        }

        .feature-icon {
          background: linear-gradient(135deg, #eab308, #1e40af);
          padding: 0.75rem;
          border-radius: 0.75rem;
          color: white;
          flex-shrink: 0;
        }

        .feature-content h3 {
          font-size: 1.25rem;
          font-weight: 600;
          color: #1e293b;
          margin-bottom: 0.5rem;
        }

        .feature-content p {
          color: #64748b;
          line-height: 1.6;
        }

        .about-cta {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        .cta-button {
          padding: 1rem 2rem;
          border: none;
          border-radius: 0.75rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
          font-size: 1rem;
        }

        .cta-button.primary {
          background: #1e40af;
          color: white;
        }

        .cta-button.primary:hover {
          background: #1e3a8a;
          transform: translateY(-1px);
        }

        .cta-button.secondary {
          background: transparent;
          color: #1e40af;
          border: 2px solid #1e40af;
        }

        .cta-button.secondary:hover {
          background: #1e40af;
          color: white;
          transform: translateY(-1px);
        }

        @media (max-width: 768px) {
          .about-section {
            padding: 3rem 0;
          }

          .section-title {
            font-size: 1.75rem;
          }

          .about-description {
            font-size: 1rem;
          }

          .feature-item {
            flex-direction: column;
            text-align: center;
            padding: 1.25rem;
          }

          .about-cta {
            flex-direction: column;
            align-items: center;
          }

          .cta-button {
            width: 100%;
            max-width: 300px;
          }
        }

        @media (max-width: 480px) {
          .section-title {
            font-size: 1.5rem;
          }

          .feature-content h3 {
            font-size: 1.125rem;
          }
        }
      `}</style>
    </section>
  );
};

export default AboutExcerpt;