import React, { useEffect, useState } from "react";

import "./About.css";

// Import images
import yatrikImg from "../Images/yatrik.jpg";
import omImg from "../Images/om.jpg";
import vardanImg from "../Images/vardan.jpg";
import pradipImg from "../Images/pradip.jpg";

// Team members array
const teamMembers = [
  { name: "Yatrik Patel", role: "Founder & Lead Developer", img: yatrikImg },
  { name: "Om Patel", role: "Backend Specialist", img: omImg },
  { name: "Vardan Pitroda", role: "Backend Developer", img: vardanImg },
  { name: "Pradip Vaghela", role: "UI/UX Designer", img: pradipImg },
];

const About = () => {
  const [stats, setStats] = useState({
    travelers: 0,
    places: 0,
    guides: 0,
    cities: 0,
  });

  useEffect(() => {
    const targetStats = { travelers: 750, places: 248, guides: 55, cities: 45 };
    let interval = setInterval(() => {
      setStats((prevStats) => ({
        travelers: Math.min(prevStats.travelers + 5, targetStats.travelers),
        places: Math.min(prevStats.places + 2, targetStats.places),
        guides: Math.min(prevStats.guides + 1, targetStats.guides),
        cities: Math.min(prevStats.cities + 1, targetStats.cities),
      }));
    }, 15);
    return () => clearInterval(interval);
  }, []);

  return (
    <main>
      {/* About Section */}
      <section id="about">
        <h2>About Us</h2>
        <p>
          Welcome to<strong>Ultimate Tour Guide</strong>, your trusted travel
          companion that connects travelers with experienced local guides. We
          help you explore breathtaking destinations with personalized tours,
          hidden gems, and authentic experiences beyond the usual tourist spots.
          Whether you're looking for adventure, culture, or relaxation, our
          platform makes it easy to find and book knowledgeable guides for a
          hassle-free journey. Let’s make your travels unforgettable! 🌍✨
        </p>
      </section>

      {/* Goal Section */}
      <section id="goal">
        <h2>Our Goal</h2>
        <p>
          We strive to make every journey seamless and enjoyable by providing
          expert guidance, insider travel tips, and a platform where travelers
          can effortlessly connect with the perfect guide. Whether you're
          seeking local insights, personalized experiences, or hassle-free trip
          planning, Ultimate Tour Guide ensures you have the best travel
          companion for an unforgettable adventure.
        </p>
      </section>

      {/* What We Offer Section */}
      <section id="description">
        <h2>What We Offer</h2>
        <p>
          From historical landmarks to thrilling adventures,
          <strong>Ultimate Tour Guide</strong> connects travelers with expert
          guides, offering personalized recommendations and seamless booking
          services. Whether you’re exploring hidden gems, indulging in local
          cuisine, or embarking on outdoor escapades, we ensure every journey is
          immersive, insightful, and unforgettable.
        </p>
      </section>

      {/* Meet Our Team */}
      <section id="team">
        <h2>Meet Our Team</h2>
        <div className="team-container">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-member">
              <img src={member.img} alt={member.name} />
              <p>
                {member.name} - {member.role}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Achievements Section */}
      <section id="stats">
        <h2>Our Achievements</h2>
        <div className="stats-container">
          <div className="stat-item">
            <h3>{stats.travelers}+</h3>
            <p>Satisfied Travelers</p>
          </div>
          <div className="stat-item">
            <h3>{stats.places}+</h3>
            <p>Places Covered</p>
          </div>
          <div className="stat-item">
            <h3>{stats.guides}+</h3>
            <p>Guides Available</p>
          </div>
          <div className="stat-item">
            <h3>{stats.cities}+</h3>
            <p>Cities Explored</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
