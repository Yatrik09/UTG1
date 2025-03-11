import React from "react";
import "./Blog.css";
const Blog= () => {
  // Sample blog post data
  const blogPosts = [
    {
      id: 1,
      imgSrc: "https://via.placeholder.com/400x300",
      title: "Discover Hidden Gems in Ahmedabad",
      description: "Find the best off-the-beaten-path places in Ahmedabad that every traveler must visit!",
    },
    {
      id: 2,
      imgSrc: "https://via.placeholder.com/400x300",
      title: "How to Book a Guide for Your Tour",
      description: "Learn how to easily book a local guide through our platform for an unforgettable experience.",
    },
    {
      id: 3,
      imgSrc: "https://via.placeholder.com/400x300",
      title: "Top 10 Events in India to Experience This Year",
      description: "Check out the most exciting festivals and events happening across India that you can't miss!",
    },
  ];

  // Sample testimonials
  const testimonials = [
    {
      quote: "The Ultimate Tour Guide helped me find amazing local experiences during my trip to Jaipur!",
      author: "Rishabh, Traveler",
    },
    {
      quote: "Booking a guide through the platform made my trip so much easier. Highly recommended!",
      author: "Priya, Tourist",
    },
  ];

  return (
    <main>
      {/* Intro Section */}
      <section className="intro">
        <div className="intro-text">
          <h2>Welcome to the Ultimate Tour Guide Blog</h2>
          <p>Explore exciting travel destinations, project updates, and travel tips to make your adventures unforgettable.</p>
        </div>
        <div className="intro-image">
          <img src="https://via.placeholder.com/600x400" alt="Ultimate Tour Guide" />
        </div>
      </section>

      {/* Featured Blog Posts */}
      <section className="blog-posts">
        <h2 className="section-title">Featured Posts</h2>
        {blogPosts.map((post) => (
          <div className="post-card" key={post.id}>
            <img src={post.imgSrc} alt={post.title} />
            <div className="post-info">
              <h3>{post.title}</h3>
              <p>{post.description}</p>
              <button className="read-more">Read More</button>
            </div>
          </div>
        ))}
      </section>

      {/* User Testimonials Section */}
      <section className="testimonials">
        <h2 className="section-title" style={{ color: "aliceblue" }}>What Our Users Say</h2>
        {testimonials.map((testimonial, index) => (
          <div className="testimonial-card" key={index}>
            <p>"{testimonial.quote}"</p>
            <span>- {testimonial.author}</span>
          </div>
        ))}
      </section>
    </main>
  );
};

export default Blog;
