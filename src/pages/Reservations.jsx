import { useState } from 'react';
import { Calendar, User, Mail, Phone, MapPin, Car, Bed } from 'lucide-react';
import './Reservations.css'; // Import the CSS file

const Reservations = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    country: '',
    city: '',
    checkIn: '',
    checkOut: '',
    roomType: '',
    roomsCount: '',
    airportTransfer: false,
    specialRequests: ''
  });

  const countries = [
    "Ethiopia", "United States", "United Kingdom", "Canada", "Germany", "France", 
    "China", "India", "Kenya", "South Africa", "Egypt", "Nigeria", "Other"
  ];

  const roomTypes = [
    { value: "twin", label: "Twin Addis - $100/night", description: "Twin beds, living room, balcony" },
    { value: "double", label: "King Addis Double - $100/night", description: "King size bed, living room, balcony" },
    { value: "single", label: "King Addis Studio - $90/night", description: "Standard bed, living room, balcony" }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Reservation data:', formData);
    alert('Thank you for your reservation request! We will contact you shortly.');
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="reservations-page">
      <div className="container">
        {/* Header */}
        <div className="page-header">
          <h1>Make a Reservation</h1>
          <p>Secure your luxurious stay at Addis View Hotel with our easy booking process</p>
        </div>

        <div className="reservation-content">
          {/* Booking Form */}
          <div className="booking-form-section">
            <form onSubmit={handleSubmit} className="booking-form">
              {/* Personal Information */}
              <div className="form-section">
                <h3>
                  <User size={20} />
                  Personal Information
                </h3>
                <div className="form-grid">
                  <div className="form-group">
                    <label htmlFor="firstName">First Name *</label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="lastName">Last Name *</label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="country">Country *</label>
                    <select
                      id="country"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select country</option>
                      {countries.map(country => (
                        <option key={country} value={country}>{country}</option>
                      ))}
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="city">City</label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>

              {/* Stay Details */}
              <div className="form-section">
                <h3>
                  <Calendar size={20} />
                  Stay Details
                </h3>
                <div className="form-grid">
                  <div className="form-group">
                    <label htmlFor="checkIn">Check-in Date *</label>
                    <input
                      type="date"
                      id="checkIn"
                      name="checkIn"
                      value={formData.checkIn}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="checkOut">Check-out Date *</label>
                    <input
                      type="date"
                      id="checkOut"
                      name="checkOut"
                      value={formData.checkOut}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Room Selection */}
              <div className="form-section">
                <h3>
                  <Bed size={20} />
                  Room Selection
                </h3>
                <div className="form-group">
                  <label htmlFor="roomType">Room Type *</label>
                  <select
                    id="roomType"
                    name="roomType"
                    value={formData.roomType}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select room type</option>
                    {roomTypes.map(room => (
                      <option key={room.value} value={room.value}>
                        {room.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="roomsCount">Number of Rooms *</label>
                  <select
                    id="roomsCount"
                    name="roomsCount"
                    value={formData.roomsCount}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select number</option>
                    {[1,2,3,4,5].map(num => (
                      <option key={num} value={num}>{num} {num === 1 ? 'room' : 'rooms'}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Additional Services */}
              <div className="form-section">
                <h3>
                  <Car size={20} />
                  Additional Services
                </h3>
                <div className="checkbox-group">
                  <label className="checkbox-label">
                    <input
                      type="checkbox"
                      name="airportTransfer"
                      checked={formData.airportTransfer}
                      onChange={(e) => setFormData({...formData, airportTransfer: e.target.checked})}
                    />
                    <span className="checkmark"></span>
                    I need airport transfer service from Bole International Airport
                  </label>
                </div>
              </div>

              {/* Special Requests */}
              <div className="form-section">
                <h3>Special Requests</h3>
                <div className="form-group">
                  <textarea
                    name="specialRequests"
                    value={formData.specialRequests}
                    onChange={handleChange}
                    placeholder="Any special requirements, dietary needs, or additional requests..."
                    rows="4"
                  ></textarea>
                </div>
              </div>

              {/* Submit Button */}
              <button type="submit" className="submit-button">
                Submit Reservation Request
              </button>
            </form>
          </div>

          {/* Booking Benefits Sidebar */}
          <div className="booking-sidebar">
            <div className="benefits-card">
              <h3>Why Book Direct?</h3>
              <div className="benefits-list">
                <div className="benefit">
                  <span className="benefit-icon">🎯</span>
                  <div>
                    <strong>Best Rate Guarantee</strong>
                    <p>Lowest prices when you book directly</p>
                  </div>
                </div>
                <div className="benefit">
                  <span className="benefit-icon">⚡</span>
                  <div>
                    <strong>Instant Confirmation</strong>
                    <p>Immediate booking confirmation</p>
                  </div>
                </div>
                <div className="benefit">
                  <span className="benefit-icon">🎁</span>
                  <div>
                    <strong>Special Offers</strong>
                    <p>Exclusive deals for direct bookings</p>
                  </div>
                </div>
                <div className="benefit">
                  <span className="benefit-icon">📞</span>
                  <div>
                    <strong>Priority Support</strong>
                    <p>Dedicated customer service</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-card">
              <h3>Need Help?</h3>
              <p>Our team is here to assist you</p>
              <div className="contact-methods">
                <a href="tel:+251111249766" className="contact-link">
                  <Phone size={16} />
                  +251-11-124-97-66
                </a>
                <a href="mailto:addisview@ethionet.et" className="contact-link">
                  <Mail size={16} />
                  addisview@ethionet.et
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reservations;