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
    desc: "Our Website Development Services deliver modern, responsive, and high-quality websites tailored to your business goals. Whether you need a business site, portfolio, e-commerce store, or custom web app, we provide fast, secure, and user-friendly solutions. We also create landing pages, redesign websites, and develop on WordPress and Shopify.",
  },

  {
    title: "Grow Your Ecommerce",
    desc: "Our E-commerce Services help businesses start and grow online smoothly. We manage marketplace setup on Amazon, Flipkart, and Meesho, along with cataloging, listings, and product optimization. Our team handles orders, boosts visibility, and ensures daily operations run easily. We also build Shopify and WooCommerce stores to help brands scale faster.",
  },

  {
    title: "IT Services",
    desc: "Our IT Support & Maintenance Services ensure your website runs smoothly, securely, and without downtime. We provide website maintenance, quick bug fixing, and advanced speed optimization to enhance performance. Our team also offers reliable technical support, helping you resolve issues fast and maintain a flawless online experience for your customers.",
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
            <h3>
              Take Your Business to the Next Level with Global's Vista
              Technologies
            </h3>

            <p>
              Take your business to the next level with a modern website or
              high-performance e-commerce store built by Global's Vista
              Technologies. We create digital platforms that don’t just look
              great — they attract customers, boost sales, and strengthen your
              online presence. Whether you need a sleek business website or a
              full-scale online store, our solutions are designed for speed,
              security, and long-term growth. With customized strategies, strong
              technical foundations, and end-to-end support, we make it easier
              for you to scale your business confidently in today’s digital
              world.
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
              to={`/services/${item.title.replace(/\s+/g, "-").toLowerCase()}`}
              className="special-card"
              key={i}
            >
              <h3>{item.title}</h3>
              <hr />
              <p>{item.desc}</p>
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
