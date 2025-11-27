import './Dining.css';

const Dining = () => {
  const diningOptions = [
    {
      name: "Main Restaurant",
      description: "Experience fine dining with Ethiopian and international cuisine in an elegant setting",
      hours: "6:00 AM - 11:00 PM",
      features: ["Breakfast Buffet", "Lunch & Dinner", "Vegetarian Options", "Live Music"]
    },
    {
      name: "Sky Bar & Lounge",
      description: "Enjoy panoramic city views while sipping cocktails and premium beverages",
      hours: "4:00 PM - 1:00 AM",
      features: ["Cocktails", "Wine Selection", "Light Snacks", "City Views"]
    },
    {
      name: "Room Service",
      description: "24-hour room service for your convenience and privacy",
      hours: "24/7",
      features: ["Full Menu", "Quick Service", "Private Dining", "Special Requests"]
    }
  ];

  return (
    <div className="dining-page">
      <div className="container">
        <div className="page-header">
          <h1>Dining Experience</h1>
          <p>Savor exceptional cuisine and beverages in our elegant dining venues</p>
        </div>

        <div className="dining-options">
          {diningOptions.map((option, index) => (
            <div key={index} className="dining-card">
              <h3>{option.name}</h3>
              <p className="description">{option.description}</p>
              <div className="hours">
                <strong>Hours:</strong> {option.hours}
              </div>
              <div className="features">
                <strong>Features:</strong>
                <ul>
                  {option.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dining;