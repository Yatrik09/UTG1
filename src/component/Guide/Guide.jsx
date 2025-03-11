import React, { useState } from "react";
import "./Guide.css";

const guides = [
  {
    id: 1,
    name: "Eiffel Tower",
    description: "A famous landmark in Paris, France.",
    phone: "6354158391",
    imgSrc: "/img/eiffel.jpg",
    link: "https://www.toureiffel.paris/en",
  },
  {
    id: 2,
    name: "Statue of Liberty",
    description: "A symbol of freedom in the USA.",
    phone: "9876543210",
    imgSrc: "/img/liberty.jpg",
    link: "https://www.nps.gov/stli/index.htm",
  },
  {
    id: 3,
    name: "Great Wall of China",
    description: "One of the greatest wonders of the world.",
    phone: "6549873210",
    imgSrc: "/img/greatwall.jpg",
    link: "https://www.travelchinaguide.com/china_great_wall/",
  },
  {
    id: 4,
    name: "Taj Mahal",
    description: "A symbol of love in India.",
    phone: "8796541230",
    imgSrc: "/img/tajmahal.jpg",
    link: "https://www.tajmahal.gov.in/",
  },
  {
    id: 5,
    name: "Machu Picchu",
    description: "An ancient Incan city in Peru.",
    phone: "7418529630",
    imgSrc: "/img/machu.jpg",
    link: "https://www.peru.travel/en/what-to-do/machu-picchu",
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
  const [rating, setRating] = useState(0);
  const [ratings, setRatings] = useState([]);

  const handleRating = (star) => {
    setRating(star);
    setRatings([...ratings, star]);
  };

  return (
    <div className="guide-card">
      <img src={guide.imgSrc} alt={guide.name} />
      <div className="guide-content">
        <h4>{guide.name}</h4>
        <p>{guide.description}</p>
        <a href={`tel:${guide.phone}`}>{guide.phone}</a>
        <div className="rating">
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              className={`star ${star <= rating ? "filled" : ""}`}
              onClick={() => handleRating(star)}
            >
              ★
            </span>
          ))}
        </div>
        <a href={guide.link} className="guide-btn" target="_blank" rel="noopener noreferrer">
          Visit
        </a>
      </div>
    </div>
  );
};

export default Guide;
