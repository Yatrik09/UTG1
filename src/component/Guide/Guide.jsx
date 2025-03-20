import React from "react";
import "./Guide.css";

const guides = [
  {
    id: 1,
    name: "Gujarat Tourism",
    description: "A famous landmark in Paris, France.",
    phone: "6354158391",
    imgSrc: "/img/eiffel.jpg",
    link: "https://www.gujarattourism.com/registered-tourist-guide.html",
    rating: 4.5,
  },
  {
    id: 2,
    name: "Gujarat Tour Guide",
    description: "A symbol of freedom in the USA.",
    phone: "9876543210",
    imgSrc: "/img/liberty.jpg",
    link: "https://www.gujarattourguide.in/",
    rating: 3.8,
  },
  {
    id: 3,
    name: "Ahmedabad Tour Guide",
    description: "One of the greatest wonders of the world.",
    phone: "6549873210",
    imgSrc: "/img/greatwall.jpg",
    link: "https://www.tourhq.com/india/ahmedabad/tour-guides",
    rating: 4.9,
  },
  {
    id: 4,
    name: "Show Round Guide",
    description: "A symbol of love in India.",
    phone: "8796541230",
    imgSrc: "/img/tajmahal.jpg",
    link: "https://www.showaround.com/locals/india/gujarat",
    rating: 4.2,
  },
];

const Guide = () => {
  return (
    <div className="guide-page">
      <div className="guide-container">
        <h2 className="text-center mb-4">Tour Guides</h2>
        <div className="guide-grid">
          {guides.map((guide) => (
            <GuideCard key={guide.id} guide={guide} />
          ))}
        </div>
      </div>
    </div>
  );
};

const GuideCard = ({ guide }) => {
  return (
    <div className="guide-card">
      <img src={guide.imgSrc} alt={guide.name} />
      <div className="guide-content">
        <h4>{guide.name}</h4>
        <p>{guide.description}</p>
        <a href={`tel:${guide.phone}`}>{guide.phone}</a>

        {/* Rating Section */}
        <div className="rating">
          {renderStars(guide.rating)}
          <span className="rating-number">({guide.rating.toFixed(1)})</span>
        </div>

        <a href={guide.link} className="guide-btn" target="_blank" rel="noopener noreferrer">
          Visit
        </a>
      </div>
    </div>
  );
};

// Function to Render Stars with Correct Half-Star Support
const renderStars = (rating) => {
  const roundedRating = Math.round(rating * 2) / 2; // Round to nearest 0.5
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    if (i <= Math.floor(roundedRating)) {
      stars.push(<span key={i} className="star filled">★</span>); // Full Star
    } else if (i - 0.5 === roundedRating) {
      stars.push(<span key={i} className="star half-filled">★</span>); // Half Star
    } else {
      stars.push(<span key={i} className="star">★</span>); // Empty Star
    }
  }
  return stars;
};

export default Guide;
