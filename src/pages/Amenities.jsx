import './Amenities.css';

const Amenities = () => {
  const amenities = [
    {
      category: "Accommodation",
      items: ["Luxury Rooms", "24/7 Room Service", "Daily Housekeeping", "Laundry Service"]
    },
    {
      category: "Dining",
      items: ["Restaurant", "Bar & Lounge", "Room Service", "Breakfast Buffet"]
    },
    {
      category: "Business",
      items: ["Conference Rooms", "Business Center", "Free WiFi", "Printing Services"]
    },
    {
      category: "Wellness",
      items: ["Fitness Center", "Spa Services", "Swimming Pool", "Sauna"]
    },
    {
      category: "Services",
      items: ["Airport Transfer", "Concierge", "Currency Exchange", "Car Rental"]
    },
    {
      category: "General",
      items: ["Free Parking", "Security", "Luggage Storage", "Tour Desk"]
    }
  ];

  return (
    <div className="amenities-page">
      <div className="container">
        <div className="page-header">
          <h1>Hotel Amenities</h1>
          <p>Discover our comprehensive facilities and services designed for your comfort and convenience</p>
        </div>

        <div className="amenities-grid">
          {amenities.map((category, index) => (
            <div key={index} className="amenity-category">
              <h3>{category.category}</h3>
              <ul>
                {category.items.map((item, itemIndex) => (
                  <li key={itemIndex}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Amenities;