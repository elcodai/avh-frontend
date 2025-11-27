import { Link } from 'react-router-dom';
import './Events.css';

const Events = () => {
  const eventTypes = [
    {
      type: "Business Meetings",
      description: "Professional meeting spaces equipped with modern technology",
      capacity: "Up to 100 people",
      features: ["Projector", "WiFi", "Catering", "Technical Support"]
    },
    {
      type: "Weddings",
      description: "Celebrate your special day with breathtaking city views",
      capacity: "Up to 200 guests",
      features: ["Decorations", "Catering", "Music Setup", "Photography"]
    },
    {
      type: "Conferences",
      description: "Host successful conferences in our spacious venues",
      capacity: "Up to 150 delegates",
      features: ["Audio-Visual Equipment", "Breakout Rooms", "Catering", "Support Staff"]
    }
  ];

  return (
    <div className="events-page">
      <div className="container">
        <div className="page-header">
          <h1>Events & Meetings</h1>
          <p>Host memorable events in our versatile venues with stunning city views</p>
        </div>

        <div className="events-grid">
          {eventTypes.map((event, index) => (
            <div key={index} className="event-card">
              <h3>{event.type}</h3>
              <p className="description">{event.description}</p>
              <div className="capacity">
                <strong>Capacity:</strong> {event.capacity}
              </div>
              <div className="features">
                <strong>Includes:</strong>
                <ul>
                  {event.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>{feature}</li>
                  ))}
                </ul>
              </div>
              <Link to="/contact" className="inquiry-btn">Send Inquiry</Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;