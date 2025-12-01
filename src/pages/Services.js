import React from "react";

export default function Services() {
  return (
    <section className="services">
      <h2>Our Services</h2>
      <div className="service-grid">
        <div className="card">
          <h3>IT Services</h3>
          <p>Custom software, automation, integrations, API development and more.</p>
        </div>
        <div className="card">
          <h3>Ecommerce Management</h3>
          <p>Amazon, Flipkart, Meesho, Shopify store management, SEO, catalog, PPC.</p>
        </div>
        <div className="card">
          <h3>Website Development</h3>
          <p>Responsive modern websites built using React, JavaScript, and SCSS.</p>
        </div>
      </div>
    </section>
  );
}
