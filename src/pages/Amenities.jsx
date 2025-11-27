import './Amenities.css';

const Amenities = () => {
  const amenities = [
    {
      category: "Conference & Events",
      items: ["Meetings & Conferences (40-60 participants)", "Corporate Events", "Weddings", "Modern Conference Equipment", "Specialist Assistants"]
    },
    {
      category: "Dining & Bar",
      items: ["Restaurant", "Coffee & Wine Bar", "Catering Services", "Breakfast Service", "Room Service"]
    },
    {
      category: "Guest Services",
      items: ["24/7 Reception", "Daily Housekeeping", "Laundry Services", "Day Care Service", "Luggage Storage"]
    },
    {
      category: "Business Facilities",
      items: ["24Hrs Free WiFi", "Internet & Fax Services", "Printing Services", "Business Center"]
    },
    {
      category: "Transport & Rental",
      items: ["Parking Lot", "Airport Transfer", "Luxurious Limousine Rental", "Mercedes & Other Cars", "Sound System Rental"]
    },
    {
      category: "Additional Services",
      items: ["Security", "Concierge", "Special Occasion Planning"]
    }
  ];

  return (
    <div className="amenities-page">
      <div className="container">
        <div className="page-header">
          <h1>Hotel Amenities & Services</h1>
          <p>The Addis View Hotel presents you with a selected range of services aimed at providing casual hospitality in a well-designed, contemporary environment where every guest is treated like royalty.</p>
        </div>

        <div className="amenities-intro">
          <p>
            The Hotel provides a conference facility for business, private meeting and small conference of 40-60 participants with complete and modern conference equipment including specialist assistants. The facility enables our guests to do their business while they are experiencing comfort luxury and convenience in the hotel. The hotel ensures that your every desire is catered for.
          </p>
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

        <div className="rental-services">
          <h3>Special Rental Services</h3>
          <div className="rental-grid">
            <div className="rental-item">
              <strong>Luxurious Limousines</strong>
              <span>for wedding or VIP Events</span>
            </div>
            <div className="rental-item">
              <strong>Mercedes and Other Cars</strong>
              <span>with or without driver</span>
            </div>
            <div className="rental-item">
              <strong>Sound System</strong>
              <span>for any kind of occasions</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Amenities;