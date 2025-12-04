import React from "react";
import { Link } from "react-router-dom";
import "./Home.scss";
import home from "../assets/home.jpg";
import image from "../assets/image.jpg";
import customer from "../assets/customer.jpg";
import account from "../assets/account.jpg";

const serviceData = [
  {
    title: "Website Development",
    slug: "website-development",
    points: [
      "Static Website Design",
      "Responsive Website Development",
      "Ecommerce Website Development",
      "Landing Page Creation",
      "UI/UX Design Optimization",
      "Website Maintenance & Support",
      "Hosting & Domain Setup Assistance",
      "SEO-Friendly Website Setup",
    ],
  },

  {
    title: "Grow Your Ecommerce",
    slug: "grow-your-ecommerce",
    points: [
      "Brand Approval Assistance",
      "Listing & Cataloging",
      "Promotional Activities",
      "Advertising & Marketing",
      "Monthly Sales Boost",
      "Rank Improvement",
      "Account Health Management",
      "Feedback Management",
    ],
  },

  {
    title: "IT Services",
    slug: "it-services",
    points: [
      "Software Configuration",
      "Application Installation Support",
      "Email Account Configuration",
      "System Update & Maintenance",
      "Device Setup & Initialization",
      "Printer & Peripheral Setup",
      "System Security & Virus Scan",
      "General IT Support Services",
    ],
  },
];

const Home = () => {
  return (
    <>
      <section className="home">
        <div className="home-container">
          {/* LEFT CONTENT */}
          <div className="home-left">
            <h1>
              Grow Your Business with a <span>Powerful Website</span> or{" "}
              <span>E-commerce Store</span>
            </h1>
            <h3>Take Your Business to the Next Level with abc</h3>

            <p>
              Take your business to the next level with a modern website or
              high-performance e-commerce store built by abc. We create digital
              platforms that don’t just look great — they attract customers,
              boost sales, and strengthen your online presence. Whether you need
              a sleek business website or a full-scale online store, our
              solutions are designed for speed, security, and long-term growth.
              With customized strategies, strong technical foundations, and
              end-to-end support, we make it easier for you to scale your
              business confidently in today’s digital world.
            </p>
            <Link to="/services" className="btn">
              Get Started
            </Link>
          </div>

          {/* RIGHT CONTENT */}
          <div className="home-right">
            <img src={home} alt="grow your business" />
          </div>
        </div>
      </section>

      {/* SERVICE SECTION */}
      <section className="service">
        <h2>OUR SERVICES</h2>

        <div className="special-grid">
          {serviceData.map((item, i) => (
            <Link
              to={`/services/${item.slug}`}
              className="special-card"
              key={i}
            >
              <h3>{item.title}</h3>
              <hr />

              <ul className="service-points">
                {item.points.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </Link>
          ))}
        </div>
      </section>

      {/* SPECIALIZATION SECTION */}
      <section className="specialization">
        <h2>SPECIALIZATION</h2>

        <div className="specialization-grid">
          <div className="specialization-card">
            <h3>Product Editing</h3>
            <img src={image} alt="Product Editing" />
          </div>

          <div className="specialization-card">
            <h3>Full Customer Satisfaction</h3>
            <img src={customer} alt="Full Customer Satisfation" />
          </div>

          <div className="specialization-card">
            <h3>Account Management</h3>
            <img src={account} alt="Account Management" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
