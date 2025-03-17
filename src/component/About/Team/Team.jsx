import React from "react";
import "./Team.css";
// Import images
import yatrikImg from "../../Images/yatrik.jpg";
import omImg from "../../Images/om.jpg";
import vardanImg from "../../Images/vardan.jpg";
import pradipImg from "../../Images/pradip.jpg";
  

const Team = () => {
  return (
    <div className="container mt-5">
      {/* Meet Our Team */}
      <div className="card border-dark mb-3 mx-auto" style={{ maxWidth: "80rem" }}>
        <div className="card-body text-dark text-center">
          <h5 className="card-title">Meet Our Team</h5>
          <p className="card-text">
            At <strong>Your Website Name</strong>, we believe that great products are built by great teams. Our diverse and talented members bring their expertise, creativity, and passion to ensure that our platform stands out in both functionality and design.
          </p>
        </div>
      </div>

      {/* Team Members */}
      {teamMembers.map((member, index) => (
        <div key={index} className="card mb-3 mx-auto" style={{ maxWidth: "1000px" }}>
          <div className="row g-0">
            <div className="col-md-4 d-flex align-items-center justify-content-center">
              <img
                src={member.image}
                className="img-fluid rounded-start"
                alt={member.name}
                style={{ height: "300px", width: "300px", objectFit: "cover" }}
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{member.name}</h5>
                <p className="card-text">{member.description1}</p>
                <p className="card-text">{member.description2}</p>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Our Commitment */}
      <div className="card border-dark mb-3 mx-auto" style={{ maxWidth: "80rem" }}>
        <div className="card-body text-dark text-center">
          <h5 className="card-title">Our Commitment</h5>
          <p className="card-text">
            Together, our team is on a mission to redefine digital experiences by creating a platform that is both powerful and easy to use.
          </p>
          <p className="card-text">
            Our collective expertise in backend architecture, frontend design, and full-stack development allows us to build a product that is secure, efficient, and visually stunning.
          </p>
          <p className="card-text">🚀 Join us on our journey as we continue to innovate!</p>
        </div>
      </div>
    </div>
  );
};

// ✅ Use the imported images instead of incorrect paths
const teamMembers = [
  {
    name: "Yatrik Patel",
    image: yatrikImg,
    description1:
      "A visionary in web development, Yatrik Patel is the driving force behind Your Website Name. With a strong background in MERN stack development, UI/UX strategies, and project management, he ensures our platform's seamless functionality.",
    description2:
      "As the Founder and Lead Developer, he guides the team towards achieving long-term goals, ensuring every aspect of development is built to perfection.",
  },
  {
    name: "Om Patel",
    image: omImg,
    description1:
      "A master of server-side technologies, Om Patel specializes in designing robust APIs and optimizing databases to ensure security and performance.",
    description2:
      "His problem-solving skills and backend expertise make him an integral part of the platform's seamless operations.",
  },
  {
    name: "Vardan Pitroda",
    image: vardanImg,
    description1:
      "A detail-oriented backend developer, Vardan ensures efficient API integration, database design, and system logic for a scalable platform.",
    description2:
      "His dedication to clean code and optimization helps maintain the stability and performance of our platform.",
  },
  {
    name: "Pradip Vaghela",
    image: pradipImg,
    description1:
      "A UI/UX specialist, Pradip crafts intuitive and aesthetically pleasing designs that enhance the user experience.",
    description2:
      "His knowledge of modern design principles ensures a smooth and engaging experience across all devices.",
  },
];

export default Team;
