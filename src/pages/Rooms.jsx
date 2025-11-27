import { Link } from 'react-router-dom';
import './Rooms.css';

const Rooms = () => {
  const rooms = [
    {
      id: 1,
      name: "Twin Addis",
      price: "$100/night",
      description: "Twin beds, living room, balcony with city view",
      features: ["Twin Beds", "Living Room", "Balcony", "City View", "Free WiFi"],
      image: "/images/rooms/twin-addis.jpg"
    },
    {
      id: 2,
      name: "King Addis Double",
      price: "$100/night",
      description: "King size bed, living room, balcony with panoramic view",
      features: ["King Size Bed", "Living Room", "Balcony", "Panoramic View", "Free WiFi"],
      image: "/images/rooms/king-double.jpg"
    },
    {
      id: 3,
      name: "King Addis Studio",
      price: "$90/night",
      description: "Standard bed, living room, balcony with city view",
      features: ["Standard Bed", "Living Room", "Balcony", "City View", "Free WiFi"],
      image: "/images/rooms/king-studio.jpg"
    }
  ];

  return (
    <div className="rooms-page">
      <div className="container">
        <div className="page-header">
          <h1>Rooms & Suites</h1>
          <p>Experience luxury and comfort in our beautifully appointed rooms with stunning city views</p>
        </div>

        <div className="rooms-grid">
          {rooms.map(room => (
            <div key={room.id} className="room-card">
              <div className="room-image">
                <img src={room.image} alt={room.name} />
                <div className="room-price">{room.price}</div>
              </div>
              <div className="room-content">
                <h3>{room.name}</h3>
                <p className="room-description">{room.description}</p>
                <ul className="room-features">
                  {room.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
                <Link to="/reservations" className="book-now-btn">Book Now</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Rooms;