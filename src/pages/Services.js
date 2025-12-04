import React from "react";
import "./Services.scss";

const servicesData = [
  {
    title: "Website Development",
    points: [
      "Custom Website Design",
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
    points: [
      "Software Configuration",
      "Application Installation Support",
      "Email Account Confi guration",
      "System Update & Maintenance",
      "Device Setup & Initialization",
      "Printer & Peripheral Setup",
      "System Security & Virus Scan",
      "General IT Support Services",
    ],
  },
];


const Services = () => {
  return (
    <div className="services-main">
      {servicesData.map((item, index) => (
        <div className="service-card" key={index}>
          <div className="card-header">{item.title}</div>
          <ul className="card-list">
            {item.points.map((p, i) => (
              <li key={i}>{p}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Services;
