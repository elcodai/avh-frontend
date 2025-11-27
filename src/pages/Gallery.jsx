import './Gallery.css';

const Gallery = () => {
  const galleryImages = [
    { category: "Rooms", image: "/images/gallery/room-1.jpg", alt: "Luxury Room" },
    { category: "Rooms", image: "/images/gallery/room-2.jpg", alt: "Suite Interior" },
    { category: "Dining", image: "/images/gallery/dining-1.jpg", alt: "Restaurant" },
    { category: "Dining", image: "/images/gallery/dining-2.jpg", alt: "Bar Area" },
    { category: "Views", image: "/images/gallery/view-1.jpg", alt: "City View" },
    { category: "Views", image: "/images/gallery/view-2.jpg", alt: "Panoramic View" },
    { category: "Amenities", image: "/images/gallery/amenity-1.jpg", alt: "Swimming Pool" },
    { category: "Amenities", image: "/images/gallery/amenity-2.jpg", alt: "Fitness Center" }
  ];

  return (
    <div className="gallery-page">
      <div className="container">
        <div className="page-header">
          <h1>Photo Gallery</h1>
          <p>Explore the beauty and luxury of Addis View Hotel through our gallery</p>
        </div>

        <div className="gallery-grid">
          {galleryImages.map((image, index) => (
            <div key={index} className="gallery-item">
              <img src={image.image} alt={image.alt} />
              <div className="image-overlay">
                <span className="category">{image.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;