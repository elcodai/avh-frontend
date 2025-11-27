import { MapPin, Navigation, Landmark, Star, Users, Award } from 'lucide-react';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <div className="container">
        <div className="page-header">
          <h1>Our Story</h1>
          <p>Discover the legacy of Addis View Hotel - where Ethiopian heritage meets modern luxury</p>
        </div>

        <div className="about-content">
          <div className="about-hero">
            <div className="hero-text">
              <h2>Experience Ethiopian Elegance</h2>
              <p>
                Perched in the vibrant, mountainous capital of Addis Ababa, Addis View Hotel 
                embodies the rich heritage and timeless sophistication of Ethiopia. For years, 
                we have been welcoming guests to experience unparalleled hospitality where 
                modern luxury meets authentic cultural charm.
              </p>
              <p>
                Our hotel stands as a testament to Ethiopian warmth and international standards 
                of excellence, offering a unique blend of traditional hospitality and 
                contemporary comfort.
              </p>
            </div>
            <div className="hero-image">
              <img src="/images/about-hotel.jpg" alt="Addis View Hotel Exterior" />
            </div>
          </div>

          <div className="mission-section">
            <h2>Our Mission & Vision</h2>
            <div className="mission-grid">
              <div className="mission-card">
                <div className="mission-icon">
                  <Star size={24} />
                </div>
                <h3>Excellence in Service</h3>
                <p>To provide exceptional hospitality experiences that exceed guest expectations through personalized service and attention to detail.</p>
              </div>
              <div className="mission-card">
                <div className="mission-icon">
                  <Users size={24} />
                </div>
                <h3>Cultural Ambassador</h3>
                <p>To showcase Ethiopian warmth and heritage while creating memorable experiences for international and local guests alike.</p>
              </div>
              <div className="mission-card">
                <div className="mission-icon">
                  <Award size={24} />
                </div>
                <h3>Sustainable Luxury</h3>
                <p>To maintain the highest standards of luxury while practicing sustainable tourism and supporting local communities.</p>
              </div>
            </div>
          </div>

          <div className="location-details">
            <h2>Prime Location & Accessibility</h2>
            <div className="location-features">
              <div className="feature-item">
                <div className="feature-icon">
                  <Navigation size={20} />
                </div>
                <div className="feature-content">
                  <h3>Strategic Position</h3>
                  <p>Located just 7 km from Bole International Airport (ADD) on the main Arat Kilo to Megenagna route, offering easy access to all major destinations in Addis Ababa.</p>
                </div>
              </div>
              
              <div className="feature-item">
                <div className="feature-icon">
                  <Landmark size={20} />
                </div>
                <div className="feature-content">
                  <h3>Cultural Gateway</h3>
                  <p>Steps away from the historic Grand Palace, National Museum, and Addis Ababa's most significant cultural and governmental landmarks.</p>
                </div>
              </div>
              
              <div className="feature-item">
                <div className="feature-icon">
                  <MapPin size={20} />
                </div>
                <div className="feature-content">
                  <h3>Panoramic City Views</h3>
                  <p>Enjoy magnificent cityscape vistas from our elevated location, offering breathtaking views of Addis Ababa's unique landscape and skyline.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="values-section">
            <h2>Our Core Values</h2>
            <div className="values-grid">
              <div className="value-item">
                <h3>Authentic Hospitality</h3>
                <p>Genuine Ethiopian warmth and personalized service that makes every guest feel like family.</p>
              </div>
              <div className="value-item">
                <h3>Cultural Pride</h3>
                <p>Celebrating and sharing Ethiopia's rich heritage through art, cuisine, and experiences.</p>
              </div>
              <div className="value-item">
                <h3>Modern Comfort</h3>
                <p>Contemporary amenities and luxurious accommodations designed for today's traveler.</p>
              </div>
              <div className="value-item">
                <h3>Environmental Care</h3>
                <p>Commitment to sustainable practices and minimizing our environmental footprint.</p>
              </div>
            </div>
          </div>

          <div className="cta-section">
            <h2>Experience Our Hospitality</h2>
            <p>Join us at Addis View Hotel and discover why we're the preferred choice for discerning travelers in Addis Ababa.</p>
            <div className="cta-buttons">
              <a href="/reservations" className="cta-button primary">Book Your Stay</a>
              <a href="/contact" className="cta-button secondary">Contact Us</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;