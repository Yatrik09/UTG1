import React, { useRef, useState } from "react";
import "./CityPage.css";

// Importing all images
import dayvisit1 from "../Images/yatrik.jpg";
import dayvisit2 from "../Images/yatrik.jpg";
import dayvisit3 from "../Images/yatrik.jpg";
import dayvisit4 from "../Images/yatrik.jpg";
import dayvisit5 from "../Images/yatrik.jpg";

import dayeat1 from "../Images/yatrik.jpg";
import dayeat2 from "../Images/yatrik.jpg";
import dayeat3 from "../Images/yatrik.jpg";
import dayeat4 from "../Images/yatrik.jpg";
import dayeat5 from "../Images/yatrik.jpg";

import nightvisit1 from "../Images/yatrik.jpg";
import nightvisit2 from "../Images/yatrik.jpg";
import nightvisit3 from "../Images/yatrik.jpg";
import nightvisit4 from "../Images/yatrik.jpg";
import nightvisit5 from "../Images/yatrik.jpg";

import nighteat1 from "../Images/yatrik.jpg";
import nighteat2 from "../Images/yatrik.jpg";
import nighteat3 from "../Images/yatrik.jpg";
import nighteat4 from "../Images/yatrik.jpg";
import nighteat5 from "../Images/yatrik.jpg";

const initialPlaces = {
  dayVisit: [
    { name: "Garden Park", image: dayvisit1, description: "A peaceful park with greenery.", rating: 4.5, mapLink: "#" },
    { name: "Lake View", image: dayvisit2, description: "A beautiful lake for sightseeing.", rating: 4.7, mapLink: "#" },
    { name: "Heritage Site", image: dayvisit3, description: "A historical landmark to explore.", rating: 4.6, mapLink: "#" },
    { name: "City Tower", image: dayvisit4, description: "A must-visit city attraction.", rating: 4.3, mapLink: "#" },
     { name: "City Tower", image: dayvisit4, description: "A must-visit city attraction.", rating: 4.3, mapLink: "#" },
    { name: "Adventure Park", image: dayvisit5, description: "An exciting place for adventure lovers.", rating: 4.8, mapLink: "#" },
  ],
  dayEat: [
    { name: "Sunny Café", image: dayeat1, description: "A cozy café for breakfast.", rating: 4.5, mapLink: "#" },
    { name: "Food Street", image: dayeat2, description: "A variety of delicious street food.", rating: 4.6, mapLink: "#" },
    { name: "Seafood Delight", image: dayeat3, description: "Fresh seafood by the beach.", rating: 4.4, mapLink: "#" },
    { name: "Vegan Hub", image: dayeat4, description: "A perfect spot for vegan lovers.", rating: 4.7, mapLink: "#" },
    { name: "Classic Diner", image: dayeat5, description: "A traditional diner with great meals.", rating: 4.3, mapLink: "#" },
  ],
  nightVisit: [
    { name: "Night Market", image: nightvisit1, description: "A vibrant shopping and food experience.", rating: 4.5, mapLink: "#" },
    { name: "Sky Lounge", image: nightvisit2, description: "A rooftop lounge with city views.", rating: 4.6, mapLink: "#" },
    { name: "City Lights Point", image: nightvisit3, description: "A perfect spot for night photography.", rating: 4.7, mapLink: "#" },
    { name: "Music Festival", image: nightvisit4, description: "Live music and entertainment.", rating: 4.4, mapLink: "#" },
    { name: "River Cruise", image: nightvisit5, description: "A relaxing cruise with dinner.", rating: 4.8, mapLink: "#" },
  ],
  nightEat: [
    { name: "Midnight Café", image: nighteat1, description: "A 24/7 café for night owls.", rating: 4.5, mapLink: "#" },
    { name: "BBQ Hub", image: nighteat2, description: "A great place for late-night BBQ.", rating: 4.6, mapLink: "#" },
    { name: "Dessert Haven", image: nighteat3, description: "Delicious desserts available all night.", rating: 4.7, mapLink: "#" },
    { name: "Fast Food Express", image: nighteat4, description: "Quick and tasty late-night snacks.", rating: 4.4, mapLink: "#" },
    { name: "Lounge & Dine", image: nighteat5, description: "A relaxing lounge with great food.", rating: 4.8, mapLink: "#" },
  ],
};

const City = () => {
  const scrollRefs = {
    dayVisit: useRef(null),
    dayEat: useRef(null),
    nightVisit: useRef(null),
    nightEat: useRef(null),
  };

  const scroll = (section, direction) => {
    if (scrollRefs[section].current) {
      scrollRefs[section].current.scrollLeft += direction * 300;
    }
  };

  // State to manage ratings dynamically
  const [places, setPlaces] = useState(initialPlaces);

  // Function to handle rating click
  const handleRatingChange = (section, index, newRating) => {
    setPlaces((prevPlaces) => {
      const updatedPlaces = { ...prevPlaces };
      updatedPlaces[section][index].rating = newRating;
      return updatedPlaces;
    });
  };

  return (
    <div className="city-page">
      {Object.entries(places).map(([section, items]) => (
        <div key={section} className="section">
          <h2 className="section-title">{section.replace(/([A-Z])/g, " $1").trim()}</h2>
          <div className="carousel-container">
            <button className="scroll-btn left" onClick={() => scroll(section, -1)}>❮</button>
            <div className="carousel-wrapper" ref={scrollRefs[section]}>
              {items.map((place, index) => (
                <div key={index} className="carousel-card">
                  <img src={place.image} alt={place.name} className="card-img" />
                  <div className="card-body">
                    <h3 className="card-title">{place.name}</h3>
                    <p className="card-text">{place.description}</p>

                    {/* Interactive Rating System */}
                    <div className="rating">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <span
                          key={star}
                          onClick={() => handleRatingChange(section, index, star)}
                          style={{
                            cursor: "pointer",
                            color: star <= place.rating ? "#ffcc00" : "#ccc",
                            fontSize: "18px",
                          }}
                        >
                          ★
                        </span>
                      ))}
                      <span> ({place.rating.toFixed(1)})</span>
                    </div>

                    <a className="map-btn" href={place.mapLink} target="_blank" rel="noopener noreferrer">View on Map</a>
                  </div>
                </div>
              ))}
            </div>
            <button className="scroll-btn right" onClick={() => scroll(section, 1)}>❯</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default City;
