import React from "react";
import "./Home.css"
const Home = () => {
  return (
    <div>
      {/* Carousel Start */}
      <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://res.cloudinary.com/dwzmsvp7f/image/upload/f_auto,w_1280/c_crop%2Cg_custom%2Fv1737025373%2Fmc5abnpx9ukirze2d3sh.jpg"
              className="d-block w-100"
              alt="Event 1"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://media.insider.in/image/upload/c_crop,g_custom/v1736568232/kaumj64kfoq7z81bdpxx.jpg"
              className="d-block w-100"
              alt="Event 2"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://english.cdn.zeenews.com/sites/default/files/2024/05/12/1403620-whatsapp-image-2024-05-11-at-21.29.44c732d930.jpg"
              className="d-block w-100"
              alt="Event 3"
            />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      {/* Carousel End */}

      <h2 className="text-center my-4">Latest Events</h2>

      {/* Event Cards */}
      {eventData.map((event, index) => (
        <div className="card card1 mb-3 " key={index}>
          <img src={event.image} className="card-img-top" alt={event.title} />
          <div className="card-body">
            <h5 className="card-title">{event.title}</h5>
            <p className="card-text">{event.description}</p>
            <a href={event.mapLink} className="btn btn-primary">
              View On Map
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

const eventData = [
  {
    image: "https://images.timesproperty.com/events_manage/1727086165_Times_ahmedabad_expo_1200x500_(1).png",
    title: "Times Ahmedabad Expo",
    description: "Explore the biggest property expo in Ahmedabad.",
    mapLink: "#",
  },
  {
    image: "https://media.assettype.com/knocksense%2F2024-11-20%2Fubx6g805%2Fddtebq.png?rect=0%2C0%2C1200%2C675",
    title: "Food Festival",
    description: "Experience an array of delicious cuisines from around the world.",
    mapLink: "#",
  },
  {
    image: "https://assets-in.bmscdn.com/discovery-catalog/events/et00431579-zfyjznhcgh-landscape.jpg",
    title: "Live Concert",
    description: "Join us for an unforgettable night of live music and entertainment.",
    mapLink: "#",
  },
  {
    image: "https://rannutsavtentcity.in/wp-content/uploads/2022/09/Official-Date-Announced-of-Rann-Utsav-2024-2025.jpg.webp",
    title: "Rann Utsav",
    description: "Witness the breathtaking beauty of the White Rann in this grand festival.",
    mapLink: "#",
  },
  {
    image: "https://akm-img-a-in.tosshub.com/businesstoday/images/story/202409/66ebb16f28820-coldplay-to-rock-two-mumbai-shows-in-2025-after-decade-long-wait-192006762-16x9.jpg?size=1200:675",
    title: "Coldplay Concert",
    description: "Experience the magic of Coldplay live in Mumbai after a decade!",
    mapLink: "#",
    className : "event5"
  },
];

export default Home;
